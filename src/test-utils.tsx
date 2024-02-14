import React, { PropsWithChildren, ReactNode } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
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

export { default as userEvent } from '@testing-library/user-event';
