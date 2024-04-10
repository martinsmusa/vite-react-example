import { configureStore } from '@reduxjs/toolkit';

import { api } from './api/api.ts';
import { reducer } from './reducers.ts';

export const setupStore = () => configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
    devTools: true
});

export const store = setupStore();
