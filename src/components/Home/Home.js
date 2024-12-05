// src/components/Home/Home.js
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";
import Logo from "../../assets/images/logo.svg";

gsap.registerPlugin(ScrollTrigger);

const HomeSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 100px 20px;

  .intro {
    font-size: 2rem;
    margin-bottom: 20px;
    opacity: 0;
    transform: translateY(50px);
  }

  .logo {
    width: 200px;
    opacity: 0;
    transform: scale(0.8);
  }
`;

const Home = () => {
  useEffect(() => {
    gsap.to(".intro", {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".intro",
        scroller: "[data-scroll-container]",
        start: "top 80%",
      },
    });

    gsap.to(".logo", {
      opacity: 1,
      scale: 1,
      duration: 1,
      scrollTrigger: {
        trigger: ".logo",
        scroller: "[data-scroll-container]",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <div data-scroll-section>
      <HomeSection>
        <h1 className="intro">Bienvenido a Ciclorama</h1>
        <img
          src={Logo}
          alt="Ciclorama Logo"
          className="logo"
          data-scroll
          data-scroll-speed="1"
        />
      </HomeSection>
    </div>
  );
};

export default Home;
