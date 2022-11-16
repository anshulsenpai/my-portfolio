import React from 'react'
import { AboutContainer, AboutContent, AboutImage, AboutTexts, AboutTitle, AboutWrapper, ContactComp } from './About.styled'
import aboutImg from "../../Assets/Images/anshul-me.jpg"
import Contact from '../Contact/Contact'

const About = () => {
    return (
        <AboutContainer id='about'>
            <AboutWrapper>
                <AboutTitle>
                    <h2>About me</h2>
                </AboutTitle>
                <AboutContent>
                    <AboutTexts>
                        <h4>Hello!</h4>
                        <p>My name is <strong>Anshul Kulkarni</strong> I'm persuing Bacherlor's of Science in Computer Science (CS). I  will graduate in 2023. Apart from that I've adapted lot of skills like full stack web development and UI/UX designing. I am focused towards my work, love to explore more and more things related to technology. I'm a quick learner with problem solving mindset.</p>
                    </AboutTexts>
                    <AboutImage>
                        <img src={aboutImg} alt="my image" />
                        <h3>Anshul Kulkarni</h3>
                        <label>Full Stack Web Developer</label>
                    </AboutImage>
                    <ContactComp>
                        <Contact />
                    </ContactComp>
                </AboutContent>
            </AboutWrapper>
        </AboutContainer>
    )
}

export default About