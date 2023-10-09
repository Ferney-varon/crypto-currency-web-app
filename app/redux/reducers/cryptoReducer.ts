'use client';

import { AnyAction, Reducer } from "@reduxjs/toolkit";

import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from '../actions/actionTypes'

export interface ICounterState {
    counter: number
};

export type CounterReducer = Reducer<ICounterState>;

export const cryptoReducer: any = (state = {}, action: AnyAction) => {
    switch (action.type) {
        case FETCH_REQUEST: {
            if (action.payload){
                const counter = action.payload.counter;
                return {...state, counter}
            }
            return state
        }
        case FETCH_SUCCESS: {
            return {...state}
        }
        case FETCH_FAILURE: {
            return {...state}
        }
        default: {
            return state;
        }
    }
};