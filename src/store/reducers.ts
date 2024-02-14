import { combineReducers } from 'redux';
import {api} from "./api/api.ts";
import {AlertSlice} from "./alert";
import { setupStore } from './index.ts';

export const reducer = combineReducers({
    api: api.reducer,
    [AlertSlice.name]: AlertSlice.reducer
});

export type RootState = ReturnType<typeof reducer>;
export type AppStore = ReturnType<typeof setupStore>
