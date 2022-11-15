import styled from 'styled-components'


export const NavbarContainer = styled.nav`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: rgb(245, 245, 245, 0.07);
`

export const NavLogo = styled.h1`
    font-size: 1.4em;
    color: whitesmoke;
    font-weight: 600;
    letter-spacing: 1px;

    span {
        color: #7DE5ED;
    }
`

export const NavList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5em;
    transition: all 0.3s ease-in-out;

    @media screen and (max-width: 768px) {
        position: absolute;
        width: 100%;
        top: 70px;
        left: 0;
        flex-direction: column;
        padding: 2.5em 1em;
        align-items: center;
        background: linear-gradient(45deg, rgba(8, 0, 8, 0.9), rgba(14, 0, 27));
        transform: translateX(100%);
    }
`

export const NavItem = styled.li`
    width: 5em;
    padding: 7px 14px;
`

export const NavLink = styled.a`
    font-size: 13px;
    color: #abb2bf;
    text-transform: uppercase;
    transition: all 0.2s ease-in-out;

    &:hover {
        color: whitesmoke;
    }
`

export const NavActions = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContactUs = styled.a`
    font-size: 13px;
    color: #abb2bf;
    padding: 7px 14px;
    background-color: transparent;
    border: 1px solid #7DE5ED;
    border-radius: 4px;
    transition: all 0.3s ease-in-out;
    font-weight: 500;

    &:hover {
        color: #202020;
        background-color: #7DE5ED;
    }
    @media screen and (max-width: 768px) {
        font-size: 11px;
    }
`

export const NavMenuBtn = styled.div`
    margin-left: 1em;
    justify-content: center;
    align-items: center;
    display: none;
    position: static;
    border: 1px solid #aab2bf;
    padding: 4px;
    border-radius: 4px;

    @media screen and (max-width: 768px) {
        display: flex;
    }
`