import { describe } from 'vitest';

import AlertSlice, { initialState } from './alert.slice.ts';
import { IAlertItem } from './alert.type.ts';

describe('Alert reducer', () => {
    const alertState: IAlertItem = {
        id: 'test-id',
        title: 'Test alert state title',
        message: 'Test alert state message'
    }

    it('Has empty initial state', () => {
        expect(AlertSlice.reducer(undefined, { type: '' })).toEqual(initialState);
    });

    it('Sets alert state', () => {
        expect(AlertSlice.reducer(initialState, AlertSlice.actions.setAlert(alertState))).toEqual(alertState);
    });

    it('Clears alert state', () => {
        // Set alert state
        const state = AlertSlice.reducer(initialState, AlertSlice.actions.setAlert(alertState));

        // Clear alert state
        const clearedState = AlertSlice.reducer(state, AlertSlice.actions.clearAlert());

        // Expect the state to be set and then reset to initial state
        expect(state).toEqual(alertState);
        expect(clearedState).toEqual(initialState);
    });
});