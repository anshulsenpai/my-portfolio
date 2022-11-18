import styled from "styled-components";

export const TestimonialContainer = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;

    @media screen and (max-width: 768px) {
        height: 110vh;
    }
`

export const TestimonialWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 1em;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;

    h2 {
        font-size: 2em;
        color: whitesmoke;
        padding: 1em;
    }
`

export const ReviewContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.5em;
    flex-wrap: wrap;
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const Review = styled.div`
    width: 300px;
    height: 230px;
    padding: 1em;
    background-color: #111;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    @media screen and (max-width: 768px) {
        width: 250px;
        padding: 10px;
    }
`

export const ClientImage = styled.div`
    width: 100%;
    height: fit-content;
    padding: 0 10px;
    overflow: hidden;
    display: flex;
    align-items: center;
    gap: 1em;

    img {
        width: 3em;
        height: 3em;
        border-radius: 1.5em;
        object-fit: cover;
    }
    label {
        color: whitesmoke;
    }
`

export const ReviewText = styled.div`
    padding: 10px 0;
    width: 100%;
    p {
        color: #abb2bf;
        font-size: 14px;
    }
    @media screen and (max-width: 425px) {
        p {
            font-size: 13px;
        }
    }
`