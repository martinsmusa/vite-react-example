import { FC } from 'react';
import { DataFetchButton, DataList, Loader } from '../../component';
import { OnThisDayLayout } from './style.ts';
import { MainTitle } from '../../style/global.ts';

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
