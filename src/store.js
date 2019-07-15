import {createStore} from "redux";

const initialState = {
    previousValues: [],
    currentValue: 0,
    futureValues: []
}

export const INCREMENT = "INCREMENT";
export const DANKREMENT = "DANKREMENT";
export const UNDO = "UNDO";
export const REDO = "REDO";

function counter(state = initialState, action){
    switch(action.type){
        case INCREMENT:
            return {
                futureValues: [],
                currentValue: state.currentValue + action.payload,
                previousValues: [state.currentValue, ...state.previousValues]
            };
        case DANKREMENT: 
            return {
                futureValues: [],
                currentValue: state.currentValue - action.payload,
                previousValues: [state.currentValue, ...state.previousValues]
            };
        case UNDO:
            return {
                futureValues: [state.currentValue, ...state.futureValues],
                currentValue: state.previousValues[0],
                previousValues: state.previousValues.slice(1)
            }
        default:
            return state;
    }
}

export default createStore(counter);