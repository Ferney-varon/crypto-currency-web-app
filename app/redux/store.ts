'use client';

import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query"
import middleware from "./middleware";
import reducers from "./reducers";

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware):any => getDefaultMiddleware().concat(middleware)
});

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;