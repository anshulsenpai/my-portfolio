import styled from "styled-components";
import { animateRightToLeft } from "../../App.styled";

// export const CardContainer = styled.div`
//     width: 24em;
//     height: 20em;
//     background: rgba(255, 255, 255, 0.08);
//     border-radius: 1em;
//     padding: 15px;
//     margin: 1em 0;

//     @media screen and (max-width: 768px) {
//         width: 20em;
//     }
// `

// export const CardWrapper = styled.div`
//     width: 100%;
//     height: 100%;
// `

// export const CardTitle = styled.div`
//     h3 {
//         color: whitesmoke;
//         font-size: 17px;
//         width: 100%;
//         text-align: center;
//         padding: 5px;
//     }
// `

// export const CardItems = styled.div`
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
//     justify-content: center;
//     justify-items: center;
//     align-items: center;
//     gap: 5px;
//     margin: 10px;
//     @media screen and (max-width: 768px) {
//         grid-template-columns: repeat(2, 1fr);
//     }
// `
// export const CardItem = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding: 10px;
//     gap: 5px;

//     @media screen and (max-width: 768px) {
//         width: 8em;
//         justify-content: flex-start;
//         grid-template-columns: repeat(2, 1fr);
//     }
// `

// export const ItemTexts = styled.div`
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
// `
// export const CardImage = styled.img`
//     width: 2em;
//     height: 2em;
//     @media screen and (max-width: 768px) {
//         width: 2.5em;
//         height: 2.5em;

//     }
// `
// export const CardText = styled.p`
//     font-size: 12px;
//     text-transform: uppercase;
//     font-weight: 400;
//     color: ${(props) => props.varient === 'name' ? "#00ABB3" : "#abb2bf"};
// `

export const CardContainer = styled.div`
    width: 220px;
    height: 215px;
    background: rgba(255, 255, 255, 0.08);
    margin: 1em;
    border-radius: 8px;
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    animation: ${animateRightToLeft} 500ms;

    &:hover {
        transform: scale(110%);
        box-shadow: 5px 5px 10px 0 rgb(0, 0, 0, 0.25);
    }

    @media screen and (max-width: 768px) {
        width: 170px;
        height: 185px;
        margin: 10px;
        padding: 10px;
    }

    @media screen and (max-width: 425px){
        transform: scale(97%);
        &:hover {
            transform: scale(97%);
            box-shadow: 5px 5px 10px 0 rgb(0, 0, 0, 0.25);
        }

    }
`

export const CardItemImage = styled.div`
    display: flex;
    align-items: center;
    gap: 1em;
`
export const CardImage = styled.img`
    width: 60px;
    @media screen and (max-width: 768px) {
        width: 35px;
    }
`

export const CardTexts = styled.p`
    display: flex;
    flex-direction: column;
`

export const CardItemName = styled.h3`
    font-size: ${(props) => props.varient === 'name' ? "16px" : "12px"};
    font-weight: ${(props) => props.varient === 'name' ? "500" : "300"};
    color: ${(props) => props.varient === 'name' ? "whitesmoke" : "#00ABB3"};
    text-transform: uppercase;

    @media screen and (max-width: 768px) {
        font-size: ${(props) => props.varient === 'name' ? "13px" : "11px"};
    }
`

export const Desc = styled.p`
    height: 8em;
    margin-top: 5px;
    font-size: 13px;
    color: #abb2bf;
    @media screen and (max-width: 768px) {
        font-size: 11px;
    }
    user-select: none; /* supported by Chrome and Opera */
   -webkit-user-select: none; /* Safari */
   -khtml-user-select: none; /* Konqueror HTML */
   -moz-user-select: none; /* Firefox */
   -ms-user-select: none; /* Internet Explorer/Edge */
`
