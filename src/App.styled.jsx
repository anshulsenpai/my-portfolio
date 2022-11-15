import styled, { keyframes } from "styled-components";

// animations 

export const animateLeftToRight = keyframes`
    from {
        transform: translateX(-50%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
`

export const animateRightToLeft = keyframes`
    from {
        transform: translateX(50%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
`

export const animateDownToUp = keyframes`
    from {
        transform: translateY(50%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
`