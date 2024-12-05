// src/components/Work/ProjectCard.js
import React from "react";
import styled from "styled-components";
import gsap from "gsap";

const Card = styled.div`
  background-color: #2c2c2c;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  .thumbnail {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .info {
    padding: 20px;
  }

  .title {
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: #455ce9;
  }

  .description {
    font-size: 1rem;
    color: #ccc;
  }
`;

const ProjectCard = ({ project, onClick }) => {
  const handleMouseEnter = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, { scale: 1, duration: 0.3, ease: "power3.out" });
  };

  return (
    <Card
      className="gallery-item"
      onClick={() => onClick(project)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={project.thumbnail} alt={project.title} className="thumbnail" />
      <div className="info">
        <h3 className="title">{project.title}</h3>
        <p className="description">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
