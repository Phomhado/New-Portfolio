import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #151515;
    color: white;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const Logo = styled.h1`
    font-size: 24px;

    @media (max-width: 768px) {
        font-size: 20px;
    }
`;

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    margin-top: 5px;
    transition: max-height 0.3s ease;
    overflow: hidden;

    &.open {
        max-height: 500px;
    }

    &.closed {
        max-height: 0;
    }
`;

export const Nav = styled.nav`
    display: flex;
    gap: 20px;
    flex-direction: row;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 10px;
        width: 100%;
    }
`;

export const NavLink = styled.a`
    color: white;
    text-decoration: none;
    font-size: 18px;

    &:hover {
        text-decoration: underline;
    }

    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

export const Button = styled.button`
    background-color: #61dafb;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;

    &:hover {
        background-color: #21a1f1;
    }

    @media (max-width: 768px) {
        width: auto;
        padding: 10px;
    }
`;

export const Hamburger = styled.div`
    display: block;
    font-size: 24px;
    cursor: pointer;
    margin-left: auto;
    margin-top: -45px;
    transition: transform 0.3s ease, opacity 0.3s ease;

    @media (min-width: 769px) {
        display: none;
    }

    &.open {
        transform: rotate(90deg);
        opacity: 0.8;
    }
`;
