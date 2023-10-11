import axios from 'axios'

import { SORT_BUTTON_CLICKED, FETCH_CRYPTOS_REQUEST, FETCH_CRYPTOS_SUCCESS, FETCH_CRYPTOS_FAILURE, FETCH_CRYPTO_BUTTON_CLICKED, SINGLE_CRYPTO_BUTTON_CLICKED, FETCH_CRYPTO_BY_ID_REQUEST, FETCH_CRYPTO_BY_ID_SUCCESS, FETCH_CRYPTO_BY_ID_FAILURE } from "./actionTypes";

const fetchCryptosRequest = () => {
    return {
        type: FETCH_CRYPTOS_REQUEST
    }
};
const fetchCryptosSuccess = (cryptosResponse) => {
    return {
        type: FETCH_CRYPTOS_SUCCESS,
        payload: cryptosResponse
    }
};
const fetchCryptosFailure = (error) => {
    return {
        type: FETCH_CRYPTOS_FAILURE,
        payload: error.message
    }
};
export const fetchCryptoBtnClicked = () => {
    return {
        type: FETCH_CRYPTO_BUTTON_CLICKED,
    }
};
const fetchCryptoByIdRequest = () => {
    return {
        type: FETCH_CRYPTO_BY_ID_REQUEST
    }
};
const fetchCryptoByIdSuccess = (cryptoResponse) => {
    return {
        type: FETCH_CRYPTO_BY_ID_SUCCESS,
        payload: cryptoResponse
    }
};
const fetchCryptoByIdFailure = (error) => {
    return {
        type: FETCH_CRYPTO_BY_ID_FAILURE,
        payload: error.message
    }
};


export const fetchCryptos = () =>{
    return  (dispatch:any) => {
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
export const fetchCryptoById = (id:number) =>{
    return  (dispatch:any) => {
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

export const singleCryptoFetchBtnClicked = (id:number) => {
    return {
        type: SINGLE_CRYPTO_BUTTON_CLICKED,
        payload: id
    }
};
export const sortTableData = (sortedData) => {
    return {
        type: SORT_BUTTON_CLICKED,
        payload: sortedData
    }
};