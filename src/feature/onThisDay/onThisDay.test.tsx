import { screen, waitFor } from '@testing-library/react';
import { act } from '@testing-library/react-hooks';

import App from '../../app.tsx';
import { birthsOnly } from '../../mocks/mockData.ts';
import AlertSlice from '../../store/alert/alert.slice.ts';
import { renderWithProviders, userEvent } from '../../test-utils.tsx';
import OnThisDay from './onThisDay.tsx';

const setup = () => {
    const { queryByText } = renderWithProviders(<OnThisDay/>);

    // Initial state
    const title = queryByText(/On this day/);
    const ctaButton = queryByText('Load events on this day');

    expect(title).toBeDefined();
    expect(ctaButton).toBeDefined();

    return ctaButton;
};

describe('Feature "Birthdays on this day"', () => {
    it('renders initial state', async () => {
        setup();
    });

    it('Loads data when button is clicked', async () => {
        const ctaButton = setup();

        // Click the button
        await userEvent.click(ctaButton!);

        // loading state active
        const loader = screen.getByTestId('loader');
        expect(loader).toBeDefined();

        // data list rendered
        const dataList = await waitFor(() => screen.getByTestId('data-list'));

        expect(dataList).toBeDefined();
        expect(dataList.children.length).toEqual(birthsOnly.births?.length);

        // Test if the rendered items are sorted by year
        let previousYear = -Infinity; // Set an initial value for the previous year

        for (let i = 0; i < dataList.children.length + 1; i++) {
            const child = dataList.children[i];
            const yearText = child?.textContent?.match(/year: (\d+)/i); // Match year text

            if (!yearText) {
                continue;
            }

            const currentYear = parseInt(yearText[1], 10); // Extract the year number

            expect(currentYear).toBeGreaterThanOrEqual(previousYear); // Check if current year is greater than or equal to previous year

            previousYear = currentYear; // Update previous year for the next iteration        }
        }
    });

    it('Renders alert modal if alert action is dispatched', async () => {
        // render feature
        const { store, queryByTestId, queryByText } = renderWithProviders(<App/>);

        // dispatch alert action
        act(() => {
            store.dispatch(AlertSlice.actions.setAlert({
                id: 'FETCH_ERROR',
                title: 'Something went wrong',
                message: 'An error occurred while fetching data'
            }))
        });

        const alert = await waitFor(() => queryByTestId('alert-notification'));
        expect(alert).toBeDefined();

        // Find close button
        const closeButton = queryByText('close')
        expect(closeButton).toBeDefined();

        // Click the button
        await userEvent.click(closeButton!);

        // Expect the alert to not be rendered
        expect(queryByTestId('alert-notification')).toBeNull()
    });
});
