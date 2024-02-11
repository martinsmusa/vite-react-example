import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {IAlertItem} from "./alert.type.ts";

const initialState: IAlertItem = {
    id: '',
    title: '',
    message: ''
};

const alertSlice = createSlice({
    name: 'AlertReducer',
    initialState,
    reducers: {
        setAlert: (
            _state,
            action: PayloadAction<IAlertItem>
        ) => action.payload,
        clearAlert: () => initialState
    }
});

export default alertSlice;
