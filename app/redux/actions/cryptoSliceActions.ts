import axios from 'axios'

import { SORT_BUTTON_CLICKED, FETCH_CRYPTOS_REQUEST, FETCH_CRYPTOS_SUCCESS, FETCH_CRYPTOS_FAILURE, FETCH_CRYPTO_BUTTON_CLICKED } from "./actionTypes";

const fetchCryptosRequest = () => {
    return {
        type: FETCH_CRYPTOS_REQUEST
    }
};
const fetchCryptosSuccess = (cryptosResponse) => {
    return {
        type: FETCH_CRYPTOS_SUCCESS,
        payload: cryptosResponse.data
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


export const fetchCryptos = () =>{
    return  (dispatch:any) => {
        dispatch(fetchCryptosRequest())
        axios
            .get('https://api.coinlore.net/api/tickers/')
            .then((response)=>{
                const {data} = response
                if(data.data && data.data.length >0){ 
                    dispatch(fetchCryptosSuccess(response.data))
                }else{throw new Error ('failed to fetch info')}
                })
            .catch((err)=>{
                dispatch(fetchCryptosFailure(err))
            })
    };
    
};

export const sortTableData = (sortedData) => {
    return {
        type: SORT_BUTTON_CLICKED,
        payload: sortedData
    }
};