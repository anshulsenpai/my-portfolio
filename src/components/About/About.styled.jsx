import styled from "styled-components";

export const AboutContainer = styled.div`
    width: 100%;
    height: 82vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        height: fit-content;
    }
`

export const AboutWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
    padding: 1em;


`
export const AboutTitle = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2em 0;

    h2 {
        color: whitesmoke;
        font-size: 2em;
    }
`
export const AboutContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        margin: 2em 0;
        flex-direction: column;
    }
`
export const AboutImage = styled.div`
    flex: 1;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
        width: 18em;
        height: 18em;
        object-fit: cover;
        object-position: top;
        border-radius: 9em;
        margin: 1em;
    }

    h3 {
        font-size: 1.6em;
        color: whitesmoke;
    }
    label {
        font-size: 14px;
        color: #abb2bf;
    }

    @media screen and (max-width: 768px) {

        img {
            width: 14em;
            height: 14em;
            border-radius: 7em;
        }
        
        label {
            font-size: 13px;
        }
    }
`
export const AboutTexts = styled.div`
    margin: 1em;
    padding: 1em;
    flex: 1;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    flex-direction: column;
    gap: 1em;

    h4 {
        font-size: 2em;
        color: whitesmoke;
    }
    p {
        font-size: 15px;
        color: #abb2bf;
    }

    @media screen and (max-width: 768px) {
        p {
            font-size: 13px;
        }
    }
`
export const ContactComp = styled.div`
    flex: 1;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`