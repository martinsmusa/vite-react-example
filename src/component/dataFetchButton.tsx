import {FC, MouseEventHandler, useCallback, useMemo} from "react";
import {OnThisDayArg} from "../type/onThisDay.ts";
import {useOnThisDayMutation} from "../store/api/api.ts";
import {useActions} from "../hooks/useActions.ts";
import {WikiResponseError} from "../type/api.ts";
import {ON_THIS_DAY_CACHE_KEY} from "../feature/onThisDay/cosntant.ts";

const DataFetchButton: FC = () => {
    const {dd, mm, type} = useMemo((): OnThisDayArg => {
        const today = new Date();

        return {
            type: 'births',
            dd: today.getDate().toString(),
            mm: (today.getMonth() + 1).toString()
        }
    }, [])
    const [fetchOnThisDay] = useOnThisDayMutation({fixedCacheKey: ON_THIS_DAY_CACHE_KEY})
    const {setAlert} = useActions()

    const requestClickHandler: MouseEventHandler<HTMLButtonElement> = useCallback(async () => {
        const res = await fetchOnThisDay({type, mm, dd});

        if ('error' in res) {
            /**
             * When api endpoint does not return the documented response shape
             */
            if (!('data' in res.error)) {
                return setAlert({
                    id: 'FETCH_ERROR',
                    title: 'Something went wrong',
                    message: 'An error occurred while fetching data'
                })
            }

            const {data: {detail, title, type}} = res.error as WikiResponseError;

            return setAlert({
                id: type,
                title: title || '',
                message: detail || 'Something went wrong'
            })
        }
    }, [dd, fetchOnThisDay, mm, setAlert, type])

    return (
        <button onClick={requestClickHandler}>
            Load events on this day
        </button>
    )
}

export default DataFetchButton
