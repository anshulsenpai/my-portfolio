import styled from "styled-components";

export const SkillsContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2em 1em;

    @media screen and (max-width: 768px) {
        height: fit-content;
    }
`

export const SkillsWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
    position: relative;

`

export const SkillsTitle = styled.div`
    width: 100%;
    text-align: center;
    h2 {
        color: whitesmoke;
        font-size: 2.2em;
    }
    label {
        color: #00abb3;
        font-size: 15px;
    }
`

export const SkillsShowcase = styled.div`
    /* width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;

    @media screen and (min-width: 768px) {

        padding: 2em;
    } */

    height: 32.5em;
    /* width: 100%; */
    overflow-y: hidden;
    scroll-snap-type: y proximity;
    margin: 2em 0;
    /* border: 1px solid white; */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    justify-items: center;

    /* align-content: center; */
    /* justify-content: center; */
    /* align-items: center; */
    padding: 10px;

    @media screen and (max-width: 768px) {
        height: 36.5em;
        grid-template-columns: repeat(2, 175px);
    }

    @media screen and (max-width: 320px){
        height: 36.5em;
        grid-template-columns: repeat(1, 225px);
    }

    &::-webkit-scrollbar{
        display: none;
    }
`

export const CardDiv = styled.div`
    scroll-snap-align: center;
`

export const Buttons = styled.div`
    width: 2em;
    height: 60%;
    border: 1px solid green;
    position: absolute;
    top: 25%;
    right: 10%;
`