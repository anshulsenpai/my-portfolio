import React from 'react'
import { Branding, FooterContainer, FooterContent, FooterWrapper, Links, Copyright } from './Footer.styled'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <Branding>
                    <a href='#home'>Jet<span>Web</span></a>
                    <label>India</label>
                </Branding>
                <FooterContent>
                    <Links>
                        <a target='_blank' href='https://www.linkedin.com/in/anshul-kulkarni-822a76241/'><LinkedInIcon className="footer--icons" /></a>
                        <a target='_blank' href='https://www.instagram.com/anshulo_senpai/'><InstagramIcon className="footer--icons" /></a>
                        <a target='_blank' href='https://twitter.com/AnshulKulkarni4?t=iSt5HREX76U32xysc9CjEw&s=09'><TwitterIcon className="footer--icons" /></a>
                    </Links>
                    <Copyright>
                        <p>This website is designed and developed by Anshul Kulkarni</p>
                        <p>Copyright 2022. All rights reserved</p>
                    </Copyright>
                </FooterContent>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer