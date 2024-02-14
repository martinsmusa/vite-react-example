import PropTypes from 'prop-types';
import { FC, memo } from 'react';
import { OnThisDayListItem } from './style.ts';

interface IListItemProps {
    text?: string,
    year?: string
}

const DataListItem: FC<IListItemProps> = memo(({ text, year }) => {
    if (!text || !year) {
        return null;
    }

    return (
        <OnThisDayListItem>
            <p>{ `Year: ${ year }` }</p>
            <p>{ text }</p>
        </OnThisDayListItem>
    );
});

DataListItem.propTypes = {
    year: PropTypes.string,
    text: PropTypes.string
}

export default DataListItem;
