import { FC } from 'react';
import { ON_THIS_DAY_CACHE_KEY } from '../../feature/onThisDay/cosntant.ts';
import { useOnThisDayMutation } from '../../store/api/api.ts';
import { OverlayBg } from '../../style/global.ts';
import {  LoaderSpinner } from './style.ts';

const Loader: FC = () => {
    const [, { isLoading }] = useOnThisDayMutation({ fixedCacheKey: ON_THIS_DAY_CACHE_KEY });

    if (!isLoading) {
        return null;
    }

    return (
        <OverlayBg>
            <LoaderSpinner />
        </OverlayBg>
    )
}

export default Loader
