import {types} from "./types";

export function numberOneAction(number) {
    return{
        type: types.NUMBER,
        payload: number
    }
}

export function numberTwoAction(number) {
    return{
        type: types.NUMBER2,
        payload: number
    }
}

export function addActions() {
    return{
        type: types.OPERATION,
        payload: types.ADD
    }
}

export function divideActions() {
    return{
        type: types.OPERATION,
        payload: types.DIVIDE
    }
}

export function multiplyActions() {
    return{
        type: types.OPERATION,
        payload: types.MULTIPLY
    }
}

export function subtractActions() {
    return{
        type: types.OPERATION,
        payload: types.SUBTRACT
    }
}