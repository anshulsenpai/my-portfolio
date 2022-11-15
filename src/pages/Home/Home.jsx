import About from "../../components/About/About"
import Footer from "../../components/Footer/Footer"
import Hero from "../../components/Hero/Hero"
import Projects from "../../components/Projects/Projects"
import Skills from "../../components/Skills/Skills"
import Testimonial from "../../components/Testimonial/Testimonial"
import { HomeContainer, HomeWrapper } from "./Home.styled"

const Home = () => {
  return (
    <HomeContainer>
      <HomeWrapper>
        {/* hero  */}
        <Hero />
        {/* skills component */}
        <Skills />
        {/* project component  */}
        <Projects />
        {/* testimonials section  */}
        <Testimonial />
        {/* about me  */}
        <About />
        {/* footer  */}
        <Footer />
      </HomeWrapper>
    </HomeContainer>
  )
}

export default Home