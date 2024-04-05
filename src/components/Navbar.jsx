import React from 'react';
import { StyledNav, NavLinks, NavLink } from '../styles/navbar.styles'

function Navbar() {
    return (
        <StyledNav>
            <NavLinks>
                <li><NavLink href="/">Home</NavLink></li>
                <li><NavLink href="/about">About</NavLink></li>
                <li><NavLink href="/services">Services</NavLink></li>
                <li><NavLink href="/contact">Contact</NavLink></li>
            </NavLinks>
        </StyledNav>
    );
}

export default Navbar;
