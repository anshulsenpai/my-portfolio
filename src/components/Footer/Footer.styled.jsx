import styled from "styled-components";

export const FooterContainer = styled.div`
    margin-top: 5em;
    width: 100%;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
    background: linear-gradient(45deg, #111222, #001);
`

export const FooterWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`

export const Branding = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    a {
        font-size: 2em;
        font-weight: 600;
        color: whitesmoke;

        span {
            color: #00abb3;
        }
    }
    label {
        font-size: 14px;
        color: #abb2bf;
    }
`

export const FooterContent = styled.div`
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Links = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
`

export const Copyright = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 2em;

    p {
        font-size: 11px;
        color: #727272;
    }
`