import styled from 'styled-components';

export const ModalContainer = styled.aside`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    box-shadow: 0 0 22px rgba(255, 0, 0, 0.5);
    padding: 2rem 2rem;
    font-size: 1.5rem;
    max-width: 80vw;
    max-height: 80vh;
`

export const ModalHeader = styled.aside`
    h3 {
        margin-top: 0;
        padding-right: 3.5rem;
    }
    
    button {
        position: absolute;
        right: 1rem;
        top: 1rem;
        font-size: 1.5rem;
        background: 0;
        border: 0;
        font-weight: 500;
        color: red;
    }
`
