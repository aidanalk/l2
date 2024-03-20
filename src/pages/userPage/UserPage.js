import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    addActions,
    divideActions,
    multiplyActions,
    numberOneAction,
    numberTwoAction,
    subtractActions
} from "../../redux/actions";

function UserPage() {

    const {one, two, result} = useSelector(state => state.userReducer)
    const dispatch = useDispatch()

    const numberOne = (event) => {
        dispatch(numberOneAction(event.target.value))
    }

    const numberTwo = (event) => {
        dispatch(numberTwoAction(event.target.value))
    }

    const add = () => {
        dispatch(addActions())
    }

    const divide = () => {
        dispatch(divideActions())
    }

    const subtract = () => {
        dispatch(subtractActions())
    }

    const multiply = () => {
        dispatch(multiplyActions())
    }


    return(
        <div>
            <input value={one} onChange={numberOne} type="number"/>
            <input value={two} onChange={numberTwo} type="number"/>
            <h1>результат: { result }</h1>
            <button onClick={add}>+</button>
            <button onClick={subtract}>-</button>
            <button onClick={multiply}>*</button>
            <button onClick={divide}>/</button>
        </div>
    )
}

export default UserPage