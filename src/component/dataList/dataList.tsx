import { FC, useMemo } from 'react';
import { useOnThisDayMutation } from '../../store/api/api.ts';
import { ON_THIS_DAY_CACHE_KEY } from '../../feature/onThisDay/cosntant.ts';
import DataListItem from './dataListItem.tsx';
import { OnThisDayList } from './style.ts';

const DataList: FC = () => {
    const [, { data, isLoading, isSuccess, isError }] = useOnThisDayMutation({
        fixedCacheKey: ON_THIS_DAY_CACHE_KEY,
        selectFromResult: (response) => ({
            ...response,
            data: (response.data?.births || []).map(({ text, year }) => ({
                text,
                year
            })).sort((a, b) => (a.year || -Infinity) - (b.year || -Infinity))
        })
    });

    const renderList = useMemo(() => {
        return data.map(({ year, text }) => <DataListItem key={ text } text={ text } year={ year }/>);
    }, [data]);

    if (isSuccess && !renderList.length) {
        return <div>No data found</div>;
    }

    if (isLoading || isError) {
        return null;
    }

    return (
        <OnThisDayList data-testid="data-list">
            { renderList }
        </OnThisDayList>
    );
};

export default DataList;