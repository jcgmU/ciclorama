import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 30px;

  a {
    color: #000000;
    font-size: 1rem;
    cursor: pointer;

    &.active {
      color: #455ce9;
    }

    &:after {
      content: "";
    }
  }

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

export const LogoImg = styled.img`
  height: 60px;
`;

export const NavLink = styled(Link)`
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
