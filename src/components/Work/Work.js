// src/components/Work/Work.js
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WorkSection = styled.section`
  min-height: 100vh;
  padding: 150px 50px 50px 50px;
  background-color: #1e1e1e;
  display: flex;
  flex-direction: column;
  align-items: center;

  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    width: 100%;
  }

  .project-detail {
    margin-top: 50px;
    width: 100%;
    text-align: center;
  }
`;

const projectsData = [
  {
    id: 1,
    title: "Proyecto Uno",
    thumbnail: "/assets/images/project1.jpg",
    description: "Descripción breve del Proyecto Uno.",
    details: "Detalles extensos sobre el Proyecto Uno.",
  },
  {
    id: 2,
    title: "Proyecto Dos",
    thumbnail: "/assets/images/project2.jpg",
    description: "Descripción breve del Proyecto Dos.",
    details: "Detalles extensos sobre el Proyecto Dos.",
  },
  // Añade más proyectos según sea necesario
];

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    gsap.from(".gallery-item", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".gallery",
        start: "top 80%",
      },
    });
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  return (
    <WorkSection>
      <h2>Our Work</h2>
      <div className="gallery">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={handleProjectClick}
          />
        ))}
      </div>

      {selectedProject && (
        <div className="project-detail">
          <h3>{selectedProject.title}</h3>
          <p>{selectedProject.details}</p>
          <button onClick={handleClose}>Cerrar</button>
        </div>
      )}
    </WorkSection>
  );
};

export default Work;
