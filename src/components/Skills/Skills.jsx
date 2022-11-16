import React from 'react'
// import Card from '../Cards/Card'
import { CardDiv, SkillsContainer, SkillsShowcase, SkillsTitle, SkillsWrapper } from './Skills.styled'
import { languages } from "../../Data/Data";
import Card2 from '../Cards/Card2';
import { useInView } from 'react-intersection-observer';



const Skills = () => {
  const {ref:myRef,inView:inView}=useInView()
  return (
    <SkillsContainer id='skills'>
      <SkillsWrapper>
        <SkillsTitle>
          <h2>Skills</h2>
          <label>What I've got</label>
        </SkillsTitle>
        <SkillsShowcase>

          {
            languages?.map(item => (
              <CardDiv className={inView ? "animate" : null} ref={myRef} key={item.name}>
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