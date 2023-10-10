import { ICounterState } from "../reducers/counterReducer";
import { ICryptoState } from "../reducers/cryptoReducer";

export const getCounterSlice = (state) => {
    return state.counterSlice;
};

export const getCounter = (state:ICounterState) => {
    return getCounterSlice(state).counter; 
};

export const getCryptosSlice = (state) => {
    return state.cryptoSlice;
};

export const getCryptos = (state:ICryptoState) => {
    return getCryptosSlice(state).cryptos;
};

export const getFetchButtonClicked = (state:ICryptoState):boolean => {
    return getCryptosSlice(state).hasFetchButtonClicked;
};
