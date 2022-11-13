import React, { useState } from 'react'
import { ContactUs, NavActions, NavbarContainer, NavItem, NavLink, NavList, NavLogo, NavMenuBtn } from './Navbar.styled'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {

  const [isActive, setIsActive] = useState(false)

  return (
    <NavbarContainer>
      <NavLogo>Jet<span>X</span>Web</NavLogo>
      <NavList className={isActive ? 'active' : null}>
        <NavItem><NavLink href='/'>Home</NavLink></NavItem>
        <NavItem><NavLink href='#skills'>Skills</NavLink></NavItem>
        <NavItem><NavLink href='/'>Projects</NavLink></NavItem>
        <NavItem><NavLink href='/'>Testimonials</NavLink></NavItem>
        <NavItem><NavLink href='/'>About</NavLink></NavItem>
      </NavList>  
      <NavActions>
        <ContactUs href='/'>Contact Us</ContactUs>
        <NavMenuBtn onClick={() => setIsActive(!isActive)}>
          {isActive ? <CloseIcon className='icons'/> : <MenuIcon className='icons'/>}
          
        </NavMenuBtn>
      </NavActions>
    </NavbarContainer>
  )
}

export default Navbar