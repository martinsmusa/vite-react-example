import type { RenderOptions } from '@testing-library/react';
import { render } from '@testing-library/react';
import React, { PropsWithChildren, ReactNode } from 'react';
import { Provider } from 'react-redux';

import { setupStore } from './store';
import { AppStore, RootState } from './store/reducers.ts';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
    preloadedState?: Partial<RootState>;
    store?: AppStore;
}

export const Wrapper = ({ children }: PropsWithChildren): ReactNode => {
    return <Provider store={ setupStore() }> { children } </ Provider>;
};

/**
 * @description From redux docs: https://redux.js.org/usage/writing-tests#setting-up-a-reusable-test-render-function
 * @param ui
 * @param store
 * @param renderOptions
 */
// eslint-disable-next-line react-refresh/only-export-components
export const renderWithProviders = (
    ui: React.ReactElement,
    {
        store = setupStore()
    }: ExtendedRenderOptions = {}
) => {
    const Wrapper = ({ children }: PropsWithChildren): ReactNode => {
        return <Provider store={ store }> { children } </ Provider>;
    };

    return { store, ...render(ui, { wrapper: Wrapper }) };
};

// eslint-disable-next-line react-refresh/only-export-components
export { default as userEvent } from '@testing-library/user-event';
