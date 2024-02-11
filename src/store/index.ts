import {configureStore} from '@reduxjs/toolkit';
import {reducer} from "./reducers.ts";
import {api} from "./api/api.ts";

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
    devTools: true
});
