import styled from 'styled-components';

export const StyledNav = styled.nav`
  background-color: #6B3CC9;
  overflow: hidden;
  display: flex;
  justify-content: space-between; // Adjusted to space-between to accommodate the hamburger icon
  padding: 1rem 0;
  height: 30px;
  align-items: center; // Ensure items are vertically centered
`;

export const NavLinks = styled.ul`
  list-style-type: none;
  display: flex;
  margin-right: 10px;
  padding: 0;

  @media (max-width: 375px) {
    flex-direction: column; // Stack links vertically on small screens
    width: 100%; // Take full width for better tap targets
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')}; // Only display when isOpen is true
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
  display: none; // Hidden by default
  
  @media (max-width: 375px) {
    display: block; // Show only on small screens
    cursor: pointer;
    font-size: 1.5rem; // Adjust size as needed
  }
`;

export const MobileNavContainer = styled.div`
  @media (max-width: 375px) {
    width: 100%; // Take full width
  }
`;
