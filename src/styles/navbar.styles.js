import styled from 'styled-components';

export const StyledNav = styled.nav`
  background-color: #6B3CC9;
  overflow: hidden;
  display: flex;
  justify-content: space-between; 
  padding: 1rem 0;
  height: 30px;
  align-items: center; 
`;

export const NavLinks = styled.ul`
  list-style-type: none;
  display: flex;
  margin-right: 10px;
  padding: 0;

  @media (max-width: 375px) {
    flex-direction: column; 
    width: 100%; 
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')}; 
  }
`;

export const NavLink = styled.a`
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;

  &:hover {
    color: black;
  }
`;

export const HamburgerIcon = styled.div`
  display: none; 
  @media (max-width: 375px) {
    display: block; 
    cursor: pointer;
    font-size: 1.5rem; 
  }
`;

export const MobileNavContainer = styled.div`
  @media (max-width: 375px) {
    width: 100%;
  }
`;
