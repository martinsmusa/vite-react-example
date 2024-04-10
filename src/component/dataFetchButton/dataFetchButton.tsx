import { FC, MouseEventHandler, useCallback, useMemo } from 'react';

import { ON_THIS_DAY_CACHE_KEY } from '../../feature/onThisDay/cosntant.ts';
import { useActions } from '../../hooks/useActions.ts';
import { useOnThisDayMutation } from '../../store/api/api.ts';
import { WikiResponseError } from '../../type/api.ts';
import { OnThisDayArg } from '../../type/onThisDay.ts';
import { CtaButton } from './style.ts';

const DataFetchButton: FC = () => {
    const parameters = useMemo((): OnThisDayArg => {
        const today = new Date();

        return {
            type: 'births',
            language: 'en',
            dd: today.getDate().toString(),
            mm: (today.getMonth() + 1).toString() 
        };
    }, []);
    const [fetchOnThisDay] = useOnThisDayMutation({ fixedCacheKey: ON_THIS_DAY_CACHE_KEY });
    const { setAlert } = useActions();

    const requestClickHandler: MouseEventHandler<HTMLButtonElement> = useCallback(async () => {
        const res = await fetchOnThisDay(parameters);

        if ('error' in res) {
            /**
             * When api endpoint does not return the documented response shape
             */
            if (!('data' in res.error)) {
                return setAlert({
                    id: 'FETCH_ERROR',
                    title: 'Something went wrong',
                    message: 'An error occurred while fetching data'
                });
            }

            const { data: { detail, title, type } } = res.error as WikiResponseError;

            return setAlert({
                id: type,
                title: title || '',
                message: detail || 'Something went wrong'
            });
        }
    }, [fetchOnThisDay, parameters, setAlert]);

    return (
        <CtaButton onClick={ requestClickHandler }>
            Load events on this day
        </CtaButton>
    );
};

export default DataFetchButton;
