'use client';

import { AnyAction, Reducer } from "@reduxjs/toolkit";

import { FETCH_CRYPTOS_FAILURE, FETCH_CRYPTOS_REQUEST, FETCH_CRYPTOS_SUCCESS, FETCH_CRYPTO_BUTTON_CLICKED, SORT_BUTTON_CLICKED } from '../actions/actionTypes'

export interface ICrypto {

}
export interface ICryptoState {
    loading: boolean;
    cryptos: ICrypto;// TODO: add this interface
    error: string;
    hasFetchButtonClicked: boolean
};

const initialState: ICryptoState = {
    loading: false,
    cryptos: [],
    error: '',
    hasFetchButtonClicked: false
}

export type ICryptoReducer = Reducer<ICryptoState>;


export const cryptoReducer: ICryptoReducer = (state = initialState as ICryptoState, action: AnyAction) => {
    switch (action.type) {
        case FETCH_CRYPTOS_REQUEST: {
            return {...state, loading: true}
        }
        case FETCH_CRYPTOS_SUCCESS: {
            if (action.payload){
                const cryptos = action.payload
                return {...state, cryptos, loading:false, hasFetchButtonClicked:true}
            }
            return state
        }
        case FETCH_CRYPTOS_FAILURE: {
            if (action.payload){
                const error = action.payload
                return {...state, error, loading: false}
            }
            return state
        }
        case SORT_BUTTON_CLICKED: {
            if (action.payload){
                const cryptos = action.payload
                return {...state, cryptos}
            }
            return {...state}
        }
        case FETCH_CRYPTO_BUTTON_CLICKED: {
            return {...state, hasFetchButtonClicked: true}
        }
        default: {
            return state;
        }
    }
};