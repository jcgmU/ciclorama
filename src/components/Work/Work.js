// src/components/Work/Work.js
import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WorkSection } from "./Work.styles";

gsap.registerPlugin(ScrollTrigger);

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
