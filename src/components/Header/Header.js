// src/components/Header/Header.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import { HeaderContainer, Nav, LogoImg, NavLink } from "./HeaderStyles";

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
