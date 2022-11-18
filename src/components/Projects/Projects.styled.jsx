import styled from "styled-components";

export const ProjectContainer = styled.div`
    width: 100%;
    height: 100vh;
    padding: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px) {
        height: 130vh;
    }
`


export const ProjectWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const Title = styled.div`
    width: 100%;
    padding: 10px;

    h2 {
        font-size: 2em;
        color: whitesmoke;
        text-align: center;
    }
`
export const MyProjects = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2em;

    @media screen and (max-width: 768px) {
        padding: 10px;
        flex-direction: column;
    }
`
export const ProjectBox = styled.div`
    width: 20em;
    height: 20em;
    /* border: 1px solid white; */
    padding: 12px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 5px;
    transition: all 0.3s ease-in-out;


    &:hover {
        transform: scale(108%);
    }
    @media screen and (max-width: 425px) {
        transform: scale(80%);

        &:hover {
        transform: scale(80%);
        }
    }
`
export const ProjectImage = styled.div`
    width: 100%;
    height: 50%;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
    }
`
export const ProjectDetails = styled.div`

    h3 {
        height: 40px;
        display: flex;
        align-items: center;
        color: whitesmoke;
        font-size: 18px;
        padding: 10px 0;
    }
    p {
        height: 70px;
        display: flex;
        font-size: 14px;
        color: #abb2bf;
    }
`

export const ProjectLinks = styled.div`
    width: fit-content;
    border-radius: 4px;
    padding: 5px 20px;
    background-color: transparent;
    border: 1px solid #7DE5ED;
    border-radius: 4px;
    transition: all 0.3s ease-in-out;

    a {
        font-size: 14px;
        color: whitesmoke;
    }

    &:hover {
        background-color: rgba(255, 255, 255, 0.5);
        border: 1px solid transparent;
    }
`
