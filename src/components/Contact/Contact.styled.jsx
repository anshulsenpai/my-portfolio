import styled from "styled-components";

export const ContactContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1em;
`

export const ContactWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h4 {
        font-size: 1.6em;
        color: whitesmoke;
        margin: 1em;
    }

    @media screen and (max-width: 768px) {
        h4 {
            font-size: 1.4em;
        }
    }
`
