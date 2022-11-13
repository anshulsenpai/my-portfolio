import Hero from "../../components/Hero/Hero"
import Skills from "../../components/Skills/Skills"
import { HomeContainer, HomeWrapper } from "./Home.styled"

const Home = () => {
  return (
    <HomeContainer>
      <HomeWrapper>
        {/* hero  */}
        <Hero />
        {/* skills component */}
        <Skills />
      </HomeWrapper>
    </HomeContainer>
  )
}

export default Home