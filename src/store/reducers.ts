import { combineReducers } from 'redux';
import {api} from "./api/api.ts";
import {AlertSlice} from "./alert";

export const reducer = combineReducers({
    api: api.reducer,
    [AlertSlice.name]: AlertSlice.reducer
});

export type RootState = ReturnType<typeof reducer>;
