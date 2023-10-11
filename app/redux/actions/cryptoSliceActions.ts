import { CryptoResponse, FSA, SimpleFSA, ErrorResponse } from '@/app/types';
import { AnyAction } from '@reduxjs/toolkit';
import axios from 'axios'
import { Dispatch } from 'react';

import { SORT_BUTTON_CLICKED, FETCH_CRYPTOS_REQUEST, FETCH_CRYPTOS_SUCCESS, FETCH_CRYPTOS_FAILURE, FETCH_CRYPTO_BUTTON_CLICKED, SINGLE_CRYPTO_BUTTON_CLICKED, FETCH_CRYPTO_BY_ID_REQUEST, FETCH_CRYPTO_BY_ID_SUCCESS, FETCH_CRYPTO_BY_ID_FAILURE } from "./actionTypes";

export type FetchCryptosRequest = SimpleFSA<typeof FETCH_CRYPTOS_REQUEST>;
export type FetchCryptosSuccess = FSA<typeof FETCH_CRYPTOS_SUCCESS, CryptoResponse[]>;
export type FetchCryptosFailure = FSA<typeof FETCH_CRYPTOS_FAILURE, {}>;

export type FetchCryptoByIdRequest = SimpleFSA<typeof FETCH_CRYPTO_BY_ID_REQUEST>;
export type FetchCryptoByIdSuccess = FSA<typeof FETCH_CRYPTO_BY_ID_SUCCESS, CryptoResponse>;
export type FetchCryptoByIdFailure = FSA<typeof FETCH_CRYPTO_BY_ID_FAILURE, {}>;

export type FetchCryptosBtnClicked = SimpleFSA<typeof FETCH_CRYPTO_BUTTON_CLICKED>;
export type SingleCryptoFetchBtnClicked = FSA<typeof SINGLE_CRYPTO_BUTTON_CLICKED, {}>;
export type SortTableData = FSA<typeof SORT_BUTTON_CLICKED, CryptoResponse>;

const fetchCryptosRequest = (): FetchCryptosRequest=> {
    return {
        type: FETCH_CRYPTOS_REQUEST
    }
};
const fetchCryptosSuccess = (cryptosResponse:CryptoResponse[]):FetchCryptosSuccess => {
    return {
        type: FETCH_CRYPTOS_SUCCESS,
        payload: cryptosResponse
    }
};
const fetchCryptosFailure = (error:ErrorResponse): FetchCryptosFailure => {
    return {
        type: FETCH_CRYPTOS_FAILURE,
        payload: error.message
    }
};

export const fetchCryptosBtnClicked = (): FetchCryptosBtnClicked=> {
    return {
        type: FETCH_CRYPTO_BUTTON_CLICKED,
    }
};

const fetchCryptoByIdRequest = (): FetchCryptoByIdRequest => {
    return {
        type: FETCH_CRYPTO_BY_ID_REQUEST
    }
};
const fetchCryptoByIdSuccess = (cryptoResponse:CryptoResponse):FetchCryptoByIdSuccess => {
    return {
        type: FETCH_CRYPTO_BY_ID_SUCCESS,
        payload: cryptoResponse
    }
};
const fetchCryptoByIdFailure = (error:ErrorResponse): FetchCryptoByIdFailure => {
    return {
        type: FETCH_CRYPTO_BY_ID_FAILURE,
        payload: error.message
    }
};

export const fetchCryptos = () => {
    return  (dispatch: Dispatch<AnyAction>): void => {
        dispatch(fetchCryptosRequest())
        axios
            .get('https://api.coinlore.net/api/tickers/')
            .then((response)=>{
                const {data} = response
                if(data.data && data.data.length >0){ 
                    dispatch(fetchCryptosSuccess(data.data))
                }else{throw new Error ('failed to fetch info')}
                })
            .catch((err)=>{
                dispatch(fetchCryptosFailure(err))
            })
    };
};

export const fetchCryptoById = (id: string) =>{
    return  (dispatch: Dispatch<AnyAction>): void => {
        dispatch(fetchCryptoByIdRequest())
        axios
        .get(`https://api.coinlore.net/api/ticker/?id=${id}`)
        .then((response)=>{
            const {data} = response
                if(data && data.length >0){ 
                    const [cryptoResponse] = data
                    dispatch(fetchCryptoByIdSuccess(cryptoResponse))
                }else{throw new Error ('failed to fetch info')}
                })
            .catch((err)=>{
                dispatch(fetchCryptoByIdFailure(err))
            })
    };
    
};

export const singleCryptoFetchBtnClicked = (id: string): SingleCryptoFetchBtnClicked => {
    return {
        type: SINGLE_CRYPTO_BUTTON_CLICKED,
        payload: id
    }
};

export const sortTableData = (sortedData:any ): SortTableData=> {
    return {
        type: SORT_BUTTON_CLICKED,
        payload: sortedData
    }
};