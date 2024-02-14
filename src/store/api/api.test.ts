import { renderHook, act } from '@testing-library/react-hooks';
import { birthsOnly } from '../../mocks/mockData.ts';
import { Wrapper } from '../../test-utils.tsx';
import { useOnThisDayMutation } from './api.ts';

describe('Api interaction', () => {
    const today = new Date();

    const parameters =  {
        type: 'births' as const,
        language: 'en',
        dd: today.getDate().toString(),
        mm: (today.getMonth() + 1).toString()
    };

    it('Renders "On this day" hook', () => {
        const { result } = renderHook(() => useOnThisDayMutation(), { wrapper: Wrapper });
        const [, { data, isLoading, isError, isUninitialized }] = result.current;

        expect(data).toBeUndefined();
        expect(isLoading).toBeFalsy();
        expect(isError).toBeFalsy();
        expect(isUninitialized).toBeTruthy();
    });

    it('Returns data in an expected shape', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useOnThisDayMutation(), { wrapper: Wrapper });
        const [fetchBirthdays] = result.current;

        act(() => {
            fetchBirthdays(parameters);
        });

        const [, loadingResponse] = result.current;

        // expect initial loading state
        expect(loadingResponse.data).toBeUndefined();
        expect(loadingResponse.isLoading).toBe(true);

        await waitForNextUpdate({ timeout: 5000 });

        const [, {data, isLoading, isError, isSuccess}] = result.current;

        // expect success state
        expect(isLoading).toBeFalsy();
        expect(isError).toBeFalsy();
        expect(isSuccess).toBeTruthy();

        // expect to return mock data
        expect('births' in data!).toBeTruthy();
        expect(data?.births?.length).toEqual(birthsOnly.births?.length);
    });
});
