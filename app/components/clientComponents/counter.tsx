'use client';

import { incrementCounter, decrementCounter } from "@/app/redux/actions/counterActions";
import { fetchInfo } from "@/app/redux/actions/cryptoSliceActions";
import { getCounter } from "@/app/redux/selectors/selector";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
    const counter = useSelector(getCounter)
    const dispatch = useDispatch<any>()

  return (
    <div>
        <h1>Number: {counter}</h1>
        <button onClick={() => dispatch(incrementCounter())}>Increment</button>
        <button onClick={() => dispatch(decrementCounter())}>Decrement</button>
    </div>
  )
}
