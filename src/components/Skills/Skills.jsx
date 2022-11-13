import React from 'react'
import Card from '../Cards/Card'
import { SkillsContainer, SkillsShowcase, SkillsTitle, SkillsWrapper } from './Skills.styled'
import { languages, frontend, backend, other } from "../../Data/Data";


const Skills = () => {
  return (
    <SkillsContainer id='skills'>
        <SkillsWrapper>
            <SkillsTitle>
                <h2>Skills</h2>
                <label>I've got</label>
            </SkillsTitle>
            <SkillsShowcase>
                <Card data={languages} title="Languages"/>
                <Card data={frontend} title="Frontend"/>
                <Card data={backend} title="Backend"/>
                <Card data={other} title="Other Skills"/>
            </SkillsShowcase>
        </SkillsWrapper>
    </SkillsContainer>
  )
}

export default Skills