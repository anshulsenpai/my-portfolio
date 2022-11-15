import React from 'react'
// import Card from '../Cards/Card'
import { CardDiv, SkillsContainer, SkillsShowcase, SkillsTitle, SkillsWrapper } from './Skills.styled'
import { languages, frameworks } from "../../Data/Data";
import Card2 from '../Cards/Card2';


const Skills = () => {
  return (
    <SkillsContainer id='skills'>
      <SkillsWrapper>
        <SkillsTitle>
          <h2>Skills</h2>
          <label>I've got</label>
        </SkillsTitle>
        <SkillsShowcase>

          {
            languages?.map(item => (
              <CardDiv key={item.name}>
                <Card2 image={item.image} name={item.name} level={item.level} desc={item.desc} />
              </CardDiv>
            ))
          }
          {/* {
            frameworks?.map(item => (
              <CardDiv key={item.name}>
                <Card2 image={item.image} name={item.name} level={item.level} />
              </CardDiv>
            ))
          } */}

          {/* <Card2 data={languages} title="Languages"/> */}
          {/* <Card data={frontend} title="Frontend"/>
                <Card data={backend} title="Backend"/>
                <Card data={other} title="Other Skills"/> */}
        </SkillsShowcase>
        {/* <Buttons>

        </Buttons> */}
      </SkillsWrapper>
    </SkillsContainer>
  )
}

export default Skills