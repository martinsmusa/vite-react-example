import { FC } from 'react';
import { DataFetchButton, DataList, Loader } from '../../component';
import { OnThisDayLayout } from './style.ts';
import { MainTitle } from '../../style/global.ts';

export const ON_THIS_DAY_CACHE_KEY = 'ON_THIS_DAY_CACHE_KEY';

const OnThisDay: FC = () => {
    return (
        <OnThisDayLayout>
            <Loader />
            <MainTitle>Wikipedia: On this day/Today</MainTitle>
            <DataFetchButton/>
            <DataList/>
        </OnThisDayLayout>
    );
};

export default OnThisDay;
