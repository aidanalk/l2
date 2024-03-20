import { types } from "../types"

const instalState = {
    one: '',
    two: '',
    result: ''
}

export default function userReducer (state = instalState, action) {
    if (action.type === types.NUMBER) {
        return{...state, one: action.payload}
    } else if (action.type === types.NUMBER2) {
        return{...state, two: action.payload}
    } else if (action.type === 'OPERATION') {
        const one = parseFloat(state.one)
        const two = parseFloat(state.two)
        if (isNaN(one) || isNaN(two)) {
          return { ...state, result: 'пустое поле' }
        } else {
          let result
          if (action.payload === types.ADD) {
            result = one + two
          } else if (action.payload === types.SUBTRACT) {
            result = one - two
          } else if (action.payload === types.MULTIPLY) {
            result = one * two
          } else if (action.payload === types.DIVIDE) {
            if (two === 0) {
              return { ...state, result: 'невозможно' }
            } else {
              result = one / two
            }
          } else {
            return state
          }
          return { ...state, result }
        }
      }

    return state
}