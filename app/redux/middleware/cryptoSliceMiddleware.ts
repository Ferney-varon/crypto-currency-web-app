import { AnyAction } from "@reduxjs/toolkit";
import { FETCH_CRYPTO_BUTTON_CLICKED } from "../actions/actionTypes";
import { fetchCryptos } from "../actions/cryptoSliceActions";


export const cryptoMiddleware = (store) => (next) => (action:AnyAction) => {
    next(action);
    switch (action.type) {
        case FETCH_CRYPTO_BUTTON_CLICKED: {
            store.dispatch(fetchCryptos());
            break;
        }
    }
};