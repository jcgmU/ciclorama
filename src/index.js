// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter as Router } from "react-router-dom";
import "locomotive-scroll/dist/locomotive-scroll.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyles />
      <App />
    </Router>
  </React.StrictMode>
);
