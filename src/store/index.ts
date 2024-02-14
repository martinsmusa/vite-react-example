import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducers.ts';
import { api } from './api/api.ts';

export const setupStore = () => configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
    devTools: true
});

export const store = setupStore();
