'use client';

import { Provider } from "react-redux";
import { LayoutProps } from "../types";
import { store } from './store'

export function ReduxProvider ({children}: LayoutProps) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
};