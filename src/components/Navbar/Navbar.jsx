import React, { useState } from 'react'
import { ContactUs, NavActions, NavbarContainer, NavItem, NavLink, NavList, NavLogo, NavMenuBtn } from './Navbar.styled'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {

  const [isActive, setIsActive] = useState(false)

  return (
      <NavbarContainer>
        <NavLogo>Jet<span>Web</span></NavLogo>
        <NavList className={isActive ? 'active' : null}>
          <NavItem><NavLink onClick={() => setIsActive(!isActive)} href='/'>Home</NavLink></NavItem>
          <NavItem><NavLink onClick={() => setIsActive(!isActive)} href='#skills'>Skills</NavLink></NavItem>
          <NavItem><NavLink onClick={() => setIsActive(!isActive)} href='#projects'>Projects</NavLink></NavItem>
          <NavItem><NavLink onClick={() => setIsActive(!isActive)} href='#testimonial'>Testimonials</NavLink></NavItem>
          <NavItem><NavLink onClick={() => setIsActive(!isActive)} href='#about'>About</NavLink></NavItem>
        </NavList>
        <NavActions>
          <ContactUs href='#contact-us'>Contact Us</ContactUs>
          <NavMenuBtn onClick={() => setIsActive(!isActive)}>
            {isActive ? <CloseIcon className='icons' /> : <MenuIcon className='icons' />}
          </NavMenuBtn>
        </NavActions>
      </NavbarContainer>
  )
}

export default Navbar