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
      <NavLink to='/'>
        <img src={process.env.PUBLIC_URL + '/rg_logo_4'} width='66px' height='50px' alt='blankkk' />
      </NavLink>
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
