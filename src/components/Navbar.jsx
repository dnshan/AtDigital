import React, { useState } from 'react';
import { StyledNav, NavLinks, NavLink, HamburgerIcon, MobileNavContainer } from '../styles/navbar.styles';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <StyledNav>
            <HamburgerIcon onClick={() => setIsOpen(!isOpen)}>
                ☰
            </HamburgerIcon>
            <MobileNavContainer isOpen={isOpen}>
                <NavLinks>
                    <li><NavLink href="/">Home</NavLink></li>
                    <li><NavLink href="/about">About</NavLink></li>
                    <li><NavLink href="/services">Services</NavLink></li>
                    <li><NavLink href="/contact">Contact</NavLink></li>
                </NavLinks>
            </MobileNavContainer>
        </StyledNav>
    );
}

export default Navbar;
