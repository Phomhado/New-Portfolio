import React from 'react';
import { Copyright, FooterContainer } from '../styles/Footer';
import { Button, Nav, NavLink } from '../styles/Header';

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <Nav>
                <NavLink href="#about">About Me</NavLink>
                <NavLink href="#projects">Projects</NavLink>
                <Button>Contact</Button>
            </Nav>
            <Copyright>© 2023 Pedro Oliveira. All rights reserved.</Copyright>
        </FooterContainer>
    );
};

export default Footer;
