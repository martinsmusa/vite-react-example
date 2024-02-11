import styled from 'styled-components';

export const OnThisDayList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 2rem;
`

export const OnThisDayListItem = styled.div`
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
