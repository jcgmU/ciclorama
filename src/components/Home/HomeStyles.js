import styled from "styled-components";

export const HomeContainer = styled.div`
  /* Contenedor principal */
`;

export const Section = styled.section`
  height: 100vh;
  max-width: 1500px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Define Button primero
export const Button = styled.button`
  padding: 15px 30px;
  font-size: 1rem;
  background-color: #455ce9;
  color: #ffffff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1e1eff;
  }
`;

export const LogoImage = styled.img`
  width: 300px;
`;

export const InfoSection = styled(Section)`
  background-color: #ffffff;
  padding: 0 50px;
  justify-content: space-between;
  width: 100%;

  .text-content {
    max-width: 60%;
    h1 {
      font-size: 50px;
      text-align: left;
    }
    p {
      font-size: 18px;
      text-align: left;
    }
  }

  ${Button} {
    align-self: flex-start;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    .text-content {
      max-width: 100%;
    }
    ${Button} {
      margin-top: 20px;
    }
  }
`;

export const ProjectsSection = styled(Section)`
  flex-direction: column;
  padding: 50px;

  h2 {
    font-size: 36px;
    margin-bottom: 30px;
    align-self: flex-start;
  }
`;

export const ProjectItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  .project-name {
    font-size: 24px;
    text-align: left;
  }

  .project-description {
    font-size: 18px;
    text-align: right;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    .project-description {
      text-align: left;
      margin-top: 10px;
    }
  }
`;

export const LineSeparator = styled.hr`
  width: 80%;
  border: none;
  height: 1px;
  background-color: #e0e0e0;
  margin: 20px 0;
`;

export const BrandsSection = styled(Section)`
  flex-direction: column;

  h2 {
    font-size: 36px;
    margin-bottom: 50px;
  }

  .carousel {
    overflow: hidden;
    width: 100%;

    .carousel-row {
      display: flex;
      animation: scroll 30s linear infinite;
      img {
        width: 200px;
        margin-right: 50px;
      }
    }

    .carousel-row.reverse {
      animation-direction: reverse;
    }

    @keyframes scroll {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-50%);
      }
    }
  }
`;

export const ContactSection = styled(Section)`
  flex-direction: column;
  padding: 50px;

  .contact-content {
    display: flex;
    justify-content: space-between;
    width: 100%;

    h1 {
      font-size: 50px;
    }

    ${Button} {
      align-self: center;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      ${Button} {
        margin-top: 20px;
      }
    }
  }

  .contact-info {
    margin-top: 30px;
    p {
      font-size: 18px;
    }
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
    width: 100%;

    img {
      width: 100px;
    }

    p {
      font-size: 14px;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      img {
        margin-bottom: 10px;
      }
    }
  }
`;
