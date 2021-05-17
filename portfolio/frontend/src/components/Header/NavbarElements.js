import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
  background-image: linear-gradient(209deg,#4ccbf5 0%,#fd8ef4 100%);  
  height: 75px;
  display: flex;
  trans: translate;
  box-shadow: 0 4px 2px -2px #777777;
  justify-content: flex-start;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 15;
  img {
    border-radius: 17%;
    mix-blend-mode: color-burn;
  }
`;

export const NavLink = styled(Link)`
  color: #ffff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active{
    color: #4ea7bd;
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  white-space: nowrap;

  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  justify-content: flex-end;
  width: 100vw;

  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #010606;
    color: white;
  }
`;