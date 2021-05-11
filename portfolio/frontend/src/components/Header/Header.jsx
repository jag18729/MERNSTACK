import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Header = () => {

  return (
    <Nav>
      <NavLink to='/'><h1>Logo</h1></NavLink>
      <Bars />
      <NavMenu>
        <NavLink to='/about-me' activeStyle> About</NavLink>
        <NavLink to='/contact-me' activeStyle> Contact Me </NavLink>
        <NavLink to='/services' activeStyle> Services</NavLink>
        <NavLink to='/sign-up' activeStyle> Sign-Up</NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to='/signin'>Sign in</NavBtnLink>
      </NavBtn>
    </Nav>
  );
};

export default Header;
