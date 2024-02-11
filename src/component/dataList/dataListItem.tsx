import { FC, memo } from 'react';
import { OnThisDayListItem } from './style.ts';

export const DataListItem: FC<{text?: string, year?: string}> = memo(({text, year}) => {
    if (!text) {
        return null
    }

    return (
        <OnThisDayListItem key={ text }>
            <p>{ `Year: ${year}` }</p>
            <p>{ text }</p>
        </OnThisDayListItem>
    )
})
