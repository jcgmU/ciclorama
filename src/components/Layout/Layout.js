// src/components/Layout/Layout.js
import React, { useEffect, useRef } from "react";
import Header from "../Header/Header";
import Lenis from "@studio-freight/lenis";

const Layout = ({ children }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenisRef.current.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisRef.current.destroy();
    };
  }, []);

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
