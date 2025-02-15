import React, { useState, useEffect } from 'react';
import { HeaderContainer, Logo, Nav, NavLink, Button, Hamburger, MenuContainer } from '../styles/Header';

const Header: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            if (window.innerWidth > 768) {
                setIsOpen(false); // Close menu on larger screens
            }
        };

        handleResize(); // Check on initial load
        window.addEventListener('resize', handleResize); // Check on resize

        return () => {
            window.removeEventListener('resize', handleResize); // Cleanup listener
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <HeaderContainer>
            <Logo>Pedro Oliveira</Logo>
            <Hamburger className={isOpen ? 'open' : ''} onClick={toggleMenu}>☰</Hamburger> {/* Hamburger icon */}
            {isMobile && isOpen && ( // Show menu if open
                <MenuContainer className={isOpen ? 'open' : 'closed'}>
                    <Nav>
                        <NavLink href="#about">About Me</NavLink>
                        <NavLink href="#projects">Projects</NavLink>
                        <Button>Contact</Button>
                    </Nav>
                </MenuContainer>
            )}
            {!isMobile && ( // Show nav normally on larger screens
                <Nav>
                    <NavLink href="#about">About Me</NavLink>
                    <NavLink href="#projects">Projects</NavLink>
                    <Button>Contact</Button>
                </Nav>
            )}
        </HeaderContainer>
    );
};

export default Header;
