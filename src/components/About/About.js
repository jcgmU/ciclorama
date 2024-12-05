// src/components/About/About.js
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AboutSection } from "./AboutStyles";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const element = aboutRef.current;

    gsap.to(element.querySelector(".content"), {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
      },
    });

    gsap.to(element.querySelector(".image"), {
      opacity: 1,
      scale: 1,
      duration: 1,
      delay: 1,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <AboutSection ref={aboutRef} data-scroll-container>
      <div className="content">
        <h2>Sobre Nosotros</h2>
        <p>
          En Ciclorama, nos dedicamos a producir contenido audiovisual de alta
          calidad que captura la esencia de tu marca. Nuestra filosofía se basa
          en la creatividad, la innovación y la excelencia en cada proyecto que
          emprendemos.
        </p>
      </div>
      <img
        src="/assets/images/about.jpg"
        alt="Sobre Ciclorama"
        className="image"
      />
    </AboutSection>
  );
};

export default About;
