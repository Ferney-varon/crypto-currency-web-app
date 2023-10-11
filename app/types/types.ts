import { Action } from "@reduxjs/toolkit";
import type { Middleware, MiddlewareAPI } from 'redux';

export type ButtonProps = {
    text: string;
    href: string;
    dashboardBtn?: boolean;
};

export type Route = {
    label: string;
    route: string
};

export type Params = {
    id: string;
};

export type LayoutProps = {
    children: React.ReactNode
};

export interface SimpleFSA<T> extends Action {
    type: T;
};

export interface FSA<T, P> extends SimpleFSA<T> {
    payload?: P;
};

export type CryptoResponse = {
    id: string;
    name: string;
    percent_change_1h: string;
    percent_change_24h: string;
    price_usd: string
    rank: number
};

export type GlobalResponse = {
    coins_count: number
    active_markets: number
    total_mcap: number;
    btc_d: string;
};

export type MarketsResponse = {
    name: string;
    base: string;
    price_usd: number;
};

export type ErrorResponse = {
    name: string;
    message: string;
}
export interface ICounterState {
    counter: number
};

export interface ICryptoState {
    loading: boolean;
    cryptos: CryptoResponse[];
    cryptoById: CryptoResponse
    error: string;
    hasFetchButtonClicked: boolean
};

export type StateCrypto = {
    cryptoSlice: ICryptoState;
    counterSlice: ICounterState;

}

export type Dispatch<A> = {
    <T extends A>(action: T): T
};

export type StoreCrypto = MiddlewareAPI<Dispatch<any>, StateCrypto>;

export type NextCrypto = Dispatch<any>;