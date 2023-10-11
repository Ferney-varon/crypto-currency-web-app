'use client';

import { useDispatch, useSelector } from "react-redux";
import { incrementCounter, decrementCounter } from "@/app/redux/actions/counterActions";
import { getCounter } from "@/app/redux/selectors/selector";

export default function Counter() {
    const counter = useSelector(getCounter)
    const dispatch = useDispatch()

  return (
    <div>
        <h1>Number: {counter}</h1>
        <button onClick={() => dispatch(incrementCounter())}>Increment</button>
        <button onClick={() => dispatch(decrementCounter())}>Decrement</button>
    </div>
  )
}
