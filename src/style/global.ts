import styled from "styled-components";

export const Layout = styled.main`
    box-sizing: border-box;
    padding: 4rem 2rem;
    max-width: 75rem;
    width: 100%;
    min-height: 100vh;
`

export const MainTitle = styled.h1`
    font-size: 3rem;
    font-weight: 400;
`

export const OverlayBg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
`;
