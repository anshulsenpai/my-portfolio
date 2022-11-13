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
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;

    @media screen and (min-width: 768px) {

        padding: 2em;
    }
`