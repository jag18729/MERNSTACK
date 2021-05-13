import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import Logo from '../../images/LOGO.png';

const Header = () => {

  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={Logo} width='55em' background-color='white' alt='' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about-me' activeStyle>About</NavLink>
          <NavLink to='/projects' activeStyle> Projects </NavLink>
          <NavLink to='/skills' activeStyle>Skills </NavLink>
          <NavLink to='/resume' activeStyle>Resume/ CV</NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/contact-me'>Contact Me</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Header;
