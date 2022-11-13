import styled from "styled-components";

export const CardContainer = styled.div`
    width: 24em;
    height: 20em;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 1em;
    padding: 15px;
    margin: 1em 0;

    @media screen and (max-width: 768px) {
        width: 20em;
    }
`

export const CardWrapper = styled.div`
    width: 100%;
    height: 100%;
`

export const CardTitle = styled.div`
    h3 {
        color: whitesmoke;
        font-size: 17px;
        width: 100%;
        text-align: center;
        padding: 5px;
    }
`

export const CardItems = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    justify-items: center;
    align-items: center;
    gap: 5px;
    margin: 10px;
    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`
export const CardItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 5px;

    @media screen and (max-width: 768px) {
        width: 8em;
        justify-content: flex-start;
        grid-template-columns: repeat(2, 1fr);
    }
`

export const ItemTexts = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`
export const CardImage = styled.img`
    width: 2em;
    height: 2em;
    @media screen and (max-width: 768px) {
        width: 2.5em;
        height: 2.5em;

    }
`
export const CardText = styled.p`
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 400;
    color: ${(props) => props.varient === 'name' ? "#00ABB3" : "#abb2bf"};
`