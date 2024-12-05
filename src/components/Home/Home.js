// src/components/Home/Home.js
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Logo from "../../assets/images/logo.svg";
import {
  HomeContainer,
  Section,
  LogoImage,
  InfoSection,
  ProjectsSection,
  ProjectItem,
  BrandsSection,
  ContactSection,
  Button,
  LineSeparator,
} from "./HomeStyles";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    // Animaciones con GSAP y ScrollTrigger
    gsap.utils.toArray(".section").forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "top top",
          scrub: true,
          scroller: "[data-scroll-container]",
        },
      });
    });
  }, []);

  return (
    <HomeContainer data-scroll-section>
      {/* Sección 1: Logo */}
      <Section className="section">
        <LogoImage src={Logo} alt="Ciclorama Logo" />
      </Section>

      {/* Sección 2: Información */}
      <InfoSection className="section">
        <div className="text-content">
          <h1>Nos dedicamos a hacer realidad tus proyectos audiovisuales</h1>
          <p>
            Descubre aquí cómo logramos que otros hagan posible sus proyectos.
          </p>
        </div>
        <Link to="/about">
          <Button>Conoce más</Button>
        </Link>
      </InfoSection>

      {/* Sección 3: Proyectos */}
      <ProjectsSection className="section">
        <h2>Últimos Proyectos</h2>
        {[1, 2, 3, 4].map((project) => (
          <div key={project}>
            <ProjectItem>
              <div className="project-name">Proyecto {project}</div>
              <div className="project-description">
                Sustantivo 1, Sustantivo 2, Sustantivo 3
              </div>
            </ProjectItem>
            {project < 4 && <LineSeparator />}
          </div>
        ))}
        <Link to="/work">
          <Button>Ver más proyectos</Button>
        </Link>
      </ProjectsSection>

      {/* Sección 4: Marcas */}
      <BrandsSection className="section">
        <h2>Marcas con las que hemos trabajado</h2>
        <div className="carousel">
          {/* Fila superior */}
          <div className="carousel-row">
            {/* Reemplaza con logos reales */}
            {[...Array(5)].map((_, index) => (
              <img
                key={`brand-top-${index}`}
                src={`/assets/images/logo${index + 1}.png`}
                alt={`Marca ${index + 1}`}
              />
            ))}
          </div>
          {/* Fila inferior */}
          <div className="carousel-row reverse">
            {[...Array(5)].map((_, index) => (
              <img
                key={`brand-bottom-${index}`}
                src={`/assets/images/logo${index + 6}.png`}
                alt={`Marca ${index + 6}`}
              />
            ))}
          </div>
        </div>
      </BrandsSection>

      {/* Sección 5: Contacto */}
      <ContactSection className="section">
        <div className="contact-content">
          <h1>¿Listo para trabajar juntos?</h1>
          <Link to="/contact">
            <Button>Contáctanos</Button>
          </Link>
        </div>
        <div className="contact-info">
          <p>Email: contacto@ciclorama.com</p>
          <p>Teléfono: +1 234 567 890</p>
        </div>
        <div className="footer">
          <img src={Logo} alt="Ciclorama Logo" />
          <p>© 2023 Ciclorama. Todos los derechos reservados.</p>
        </div>
      </ContactSection>
    </HomeContainer>
  );
};

export default Home;
