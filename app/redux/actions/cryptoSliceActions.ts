import { RSAA } from 'redux-api-middleware';
import { RSAAAction, RSAACall } from 'redux-api-middleware';


import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from "./actionTypes";


export const fetchInfo= () => {
    const endpoint = 'https://api.coinlore.net/api/tickers/';
    const request = {
        endpoint,
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        types: [FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE]
    };
    return {
        [RSAA]: request
    }as RSAAAction
};