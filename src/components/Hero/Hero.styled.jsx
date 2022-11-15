import styled from "styled-components"

export const HeroContainer = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.2em;
    @media screen and (max-width: 768px) {
        margin: 5em 0;
        height: 105vh;
    }
`

export const HeroWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        flex-direction: column-reverse;
        gap: 1em;
    }
`

export const HeroImage = styled.div`
    width: 100%;
    height: 100%;
    flex: 1;
    /* border: 1px solid whitesmoke; */
    padding: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    img {
        display: block;
        width: 100%;
        height: 100%;
        max-width: 20em;
        object-fit: contain;
        object-position: center;
        border-radius: 5px;
        @media screen and (max-width: 768px) {
            width: 90%;
            height: 100%;
            object-fit: cover;
        }
    }

    h2 {   
        width: 100%;
        color: rgba(240, 248, 255, 0.2);
        font-size: 2em;
        text-transform: uppercase;
        padding: 0 10px;
        width: fit-content;
        background: linear-gradient(90deg, rgb(255, 255, 255, 0.1), rgba(0, 0, 0, 0.1));
        writing-mode: vertical-lr;
        text-orientation: upright;
        text-align: center;
    }
`

export const HeroText = styled.div`
    width: 100%;
    height: 100%;
    flex: 1;
    padding: 1.2em 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1em;
    user-select: none; /* supported by Chrome and Opera */
   -webkit-user-select: none; /* Safari */
   -khtml-user-select: none; /* Konqueror HTML */
   -moz-user-select: none; /* Firefox */
   -ms-user-select: none; /* Internet Explorer/Edge */
   
    h2{
        width: 100%;
        font-size: 2.2em;
        color: whitesmoke;

        @media screen and (max-width: 768px) {
            font-size: 1.8em;
        }
    }

    p {
        width: 100%;
        font-size: 14px;
        color: #abb2bf;
        
    }
    span {
        font-weight: 600;
        font-size: 15px;
        color: #00ABB3;
    }
`

export const HeroActions = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    gap: 10px;
`
export const ActionBtn = styled.a`
    font-weight: 500;
    font-size: 14px;
    color: ${(props) => props.varient === 'download' ? '#111111' : 'white'};
    padding: 10px 16px;
    background-color: ${(props) => props.varient === 'download' ? '#00ABB3' : 'transparent'};
    border: 1px solid #00ABB3;
    border-radius: 4px;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: ${(props) => props.varient === 'download' ? '#00f2ff' : 'rgb(255, 255, 255, 0.15)'};
        border: 1px solid transparent;
    }
`
