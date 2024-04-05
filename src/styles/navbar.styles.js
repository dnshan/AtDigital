// src/styles/NavBarStyles.js
import styled from 'styled-components';

export const StyledNav = styled.nav`
  background-color: #6B3CC9;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  padding: 1rem 0;
  height: 30px;
`;

export const NavLinks = styled.ul`
  list-style-type: none;
  display: flex;
  margin-right: 10px;
  padding: 0;
`;

export const NavLink = styled.a`
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;

  &:hover {
    /* background-color: #ddd; */
    color: black;
  }
`;
