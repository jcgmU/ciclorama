import React, { useRef, useEffect } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { Routes, Route, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Home from "./components/Home/Home";
import Work from "./components/Work/Work";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Layout from "./components/Layout/Layout";
import useLocoScroll from "./hooks/useLocoScroll";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const containerRef = useRef(null);
  const location = useLocation();

  useLocoScroll(true); // Iniciar el hook

  useEffect(() => {
    // Eliminamos la configuración de Barba.js
  }, [location]);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
      }}
      watch={[location.pathname]}
      containerRef={containerRef}
      location={location.pathname}
      onLocationChange={(scroll) =>
        scroll.scrollTo(0, { duration: 0, disableLerp: true })
      }
    >
      <div data-scroll-container ref={containerRef}>
        <div id="barba-wrapper">
          <div className="barba-container">
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/work" element={<Work />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Layout>
          </div>
        </div>
      </div>
    </LocomotiveScrollProvider>
  );
};

export default App;
