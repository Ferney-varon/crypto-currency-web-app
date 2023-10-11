'use client';

import { ICounterState } from "@/app/types";
import { AnyAction, Reducer } from "@reduxjs/toolkit";

import { DECREMENT_BUTTON_CLICKED, INCREMENT_BUTTON_CLICKED } from '../actions/actionTypes'



const initialState: ICounterState = {
    counter: 0
};

export type CounterReducer = Reducer<ICounterState>;

export const counterReducer: CounterReducer = (state:ICounterState = initialState, action: AnyAction) => {
    switch (action.type) {
        case INCREMENT_BUTTON_CLICKED: {
            return {...state}
        }
        case DECREMENT_BUTTON_CLICKED: {
            return {...state}
        }
        default: {
            return state;
        }
    }
};