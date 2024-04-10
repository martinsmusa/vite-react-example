import { combineReducers } from 'redux';

import {AlertSlice} from "./alert";
import {api} from "./api/api.ts";
import { setupStore } from './index.ts';

export const reducer = combineReducers({
    api: api.reducer,
    [AlertSlice.name]: AlertSlice.reducer
});

export type RootState = ReturnType<typeof reducer>;
export type AppStore = ReturnType<typeof setupStore>
