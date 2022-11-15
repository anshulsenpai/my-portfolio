import { myProjects as MyProductsData } from "../../Data/Data"
import { MyProjects, ProjectBox, ProjectContainer, ProjectDetails, ProjectImage, ProjectLinks, ProjectWrapper, Title } from "./Projects.styled"


const Projects = () => {
  return (
    <ProjectContainer id="projects">
        <ProjectWrapper>
            <Title>
                <h2>My Projects</h2>
            </Title>
            <MyProjects>
                {
                    MyProductsData?.map(item => (
                        <ProjectBox key={item.name}>
                            <ProjectImage>
                                <img src={item.image} alt="img" />
                            </ProjectImage>
                            <ProjectDetails>
                                <h3>{item.name}</h3>
                                <p>{item.title}</p>
                            </ProjectDetails>
                            <ProjectLinks>
                                <a href={item.link} target="_black">Link</a>
                            </ProjectLinks>
                        </ProjectBox>
                    ))
                }
            </MyProjects>
        </ProjectWrapper>
    </ProjectContainer>
  )
}

export default Projects