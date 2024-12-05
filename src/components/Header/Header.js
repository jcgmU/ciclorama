// src/components/Header/Header.js
import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(18, 18, 18, 0.9);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

const LogoImg = styled.img`
  height: 40px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const NavLink = styled(Link)`
  position: relative;
  font-size: 1rem;
  cursor: pointer;

  &:after {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #455ce9;
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }

  &.active {
    color: #1e1eff;
  }
`;

const Header = () => {
  const location = useLocation();

  return (
    <HeaderContainer>
      <Link to="/">
        <LogoImg src={Logo} alt="Ciclorama Logo" />
      </Link>
      <Nav>
        <NavLink to="/" className={location.pathname === "/" ? "active" : ""}>
          Home
        </NavLink>
        <NavLink
          to="/work"
          className={location.pathname === "/work" ? "active" : ""}
        >
          Work
        </NavLink>
        <NavLink
          to="/about"
          className={location.pathname === "/about" ? "active" : ""}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={location.pathname === "/contact" ? "active" : ""}
        >
          Contact
        </NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
