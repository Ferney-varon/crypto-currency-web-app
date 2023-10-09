import { AnyAction } from "@reduxjs/toolkit";
import { INCREMENT_BUTTON_CLICKED } from "../actions/actionTypes";
import { fetchInfo } from "../actions/cryptoSliceActions";


export const cryptoMiddleware = (store) => (next) => (action:AnyAction) => {
    next(action);
    const state = store.getState();
    switch (action.type) {
        case INCREMENT_BUTTON_CLICKED: {
            store.dispatch(fetchInfo());
            break;
        }
    }
};