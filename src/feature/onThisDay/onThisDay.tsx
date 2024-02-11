import {FC} from "react";
import {DataFetchButton, DataList} from "../../component";
import {useOnThisDayMutation} from "../../store/api/api.ts";
import {ON_THIS_DAY_CACHE_KEY} from "./cosntant.ts";

const OnThisDay: FC = () => {
    const [, {isLoading}] = useOnThisDayMutation({fixedCacheKey: ON_THIS_DAY_CACHE_KEY})

    return (
        <section>
            {isLoading && (<div>loader goes here</div>)}
            <DataFetchButton />
            <DataList />
        </section>
    )
}

export default OnThisDay
