import styled from 'styled-components';

export const LoaderSpinner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    border: 16px solid lightgray;
    border-radius: 50%;
    border-top: 16px solid black;
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;


    /* Safari */
    @-webkit-keyframes spin {
        0% {
            -webkit-transform: translate(-50%, -50%) rotate(0deg);
        }
        100% {
            -webkit-transform: translate(-50%, -50%) rotate(360deg);
        }
    }

    @keyframes spin {
        0% {
            transform: translate(-50%, -50%) rotate(0deg);
        }
        100% {
            transform: translate(-50%, -50%) rotate(360deg);
        }
    }
`;