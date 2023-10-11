import { CryptoResponse, ICounterState, ICryptoState, StateCrypto } from "@/app/types";

export const getCounterSlice = (state: StateCrypto): ICounterState => {
    return state.counterSlice;
};

export const getCounter = (state:StateCrypto): number=> {
    return getCounterSlice(state).counter; 
};

export const getCryptosSlice = (state:StateCrypto): ICryptoState => {
    return state.cryptoSlice;
};

export const getCryptos = (state:StateCrypto): CryptoResponse[] => {
    return getCryptosSlice(state).cryptos;
};

export const getFetchButtonClicked = (state:StateCrypto): boolean => {
    return getCryptosSlice(state).hasFetchButtonClicked;
};

export const getCryptoById = (state:StateCrypto): CryptoResponse => {
    return getCryptosSlice(state).cryptoById;
};