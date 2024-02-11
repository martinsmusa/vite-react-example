import {FC, useMemo} from "react";
import {useOnThisDayMutation} from "../store/api/api.ts";
import {ON_THIS_DAY_CACHE_KEY} from "../feature/onThisDay/cosntant.ts";

const DataList: FC = () => {
    const [, {data}] = useOnThisDayMutation({
        fixedCacheKey: ON_THIS_DAY_CACHE_KEY,
        selectFromResult: (response) => ({
            ...response,
            data: (response.data?.births || []).map(({text}) => ({text}))
        })
    })

    const renderList = useMemo(() => {
        return data.map(birth => (
            <li key={birth.text}>
                {birth.text}
            </li>
        ))
    }, [data])

    return (
        <ul>
            {renderList}
        </ul>
    )
}

export default DataList