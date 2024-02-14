import { render } from '@testing-library/react';
import DataListItem from './dataListItem.tsx';

describe('List item component', () => {
    it('renders the component if props are provided', () => {
        const year = 1990;
        const text = 'Some event';

        const { queryByText } = render(<DataListItem year={ year } text={ text }/>);
        const renderedYear = queryByText(`Year: ${ year }`);
        const renderedText = queryByText(text);

        expect(renderedText).toBeDefined();
        expect(renderedYear).toBeDefined();
    });

    it('does not render if year is not provided', () => {
        const text = 'Some event';

        const { queryByText } = render(<DataListItem text={ text }/>);
        const renderedText = queryByText(text);

        expect(renderedText).toBeNull();
    });

    it('does not render if text is not provided', () => {
        const year = 1990;
        const { queryByText } = render(<DataListItem year={ year }/>);
        const renderedText = queryByText(year);

        expect(renderedText).toBeNull();
    });
});
