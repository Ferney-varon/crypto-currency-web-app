'use client';

import { AnyAction, Reducer } from "@reduxjs/toolkit";

import { DECREMENT_BUTTON_CLICKED, INCREMENT_BUTTON_CLICKED } from '../actions/actionTypes'

export interface ICounterState {
    counter: number
};

const initialState: ICounterState = {
    counter: 0
};

export type CounterReducer = Reducer<ICounterState>;

export const counterReducer: any = (state:ICounterState = initialState, action: AnyAction) => {
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