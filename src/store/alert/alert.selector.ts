import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../reducers.ts';

export const alertSelector = createSelector(
    (state: RootState) => state,
    (state: RootState) => state.AlertReducer
);
