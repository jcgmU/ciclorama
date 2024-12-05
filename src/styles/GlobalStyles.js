// src/styles/GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* Reset CSS */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Estilos globales */
  body {
    background-color: #121212;
    color: #fff;
    font-family: 'OlivieSans-Regular', sans-serif;
    overflow: hidden;
  }

  a {
    color: #455CE9;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #1E1EFF;
  }

  /* Scrollbar personalizado */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #121212;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #455CE9;
    border-radius: 4px;
  }
`;

export default GlobalStyles;
