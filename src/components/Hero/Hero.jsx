import { ActionBtn, HeroActions, HeroContainer, HeroImage, HeroText, HeroWrapper } from "./Hero.styled"
import heroImg from "../../Assets/Images/anshul-bg.png"
import cv from "../../Assets/cv.pdf"

const Hero = () => {
  return (
    <HeroContainer >
      <HeroWrapper>
        <HeroImage>
          <img src={heroImg} alt="hero image" />
          {/* <h2>mern stack developer</h2> */}
        </HeroImage>
        <HeroText>
          <h2>I'm a FullStack Developer, UI/UX Designer & A freelancer</h2>
          <p>Courteous and enthusiastic, I am interested in IT and everything in it's orbit. I recently began to be fascinated by web programming. i.e <span>React</span> & <span>Node</span></p>
          <HeroActions>
            <ActionBtn href={cv} varient="download">Download CV</ActionBtn>
            <ActionBtn href="#contact-us" varient="contact">Contact Us</ActionBtn>
          </HeroActions>
        </HeroText>
      </HeroWrapper>
    </HeroContainer>
  )
}

export default Hero