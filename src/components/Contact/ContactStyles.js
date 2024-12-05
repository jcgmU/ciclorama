import styled from "styled-components";

export const ContactSection = styled.section`
  min-height: 100vh;
  padding: 150px 50px 50px 50px;
  background-color: #1e1e1e;
  display: flex;
  flex-direction: column;
  align-items: center;

  .form-container {
    background-color: #2c2c2c;
    padding: 40px;
    border-radius: 10px;
    width: 100%;
    max-width: 600px;
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 1s ease, transform 1s ease;
  }

  .form-container.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .input-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  .input-group label {
    margin-bottom: 5px;
    color: #fff;
  }

  .input-group input,
  .input-group textarea {
    padding: 10px;
    border: none;
    border-radius: 5px;
  }

  .input-group input:focus,
  .input-group textarea:focus {
    outline: none;
    box-shadow: 0 0 5px #455ce9;
  }

  .submit-btn {
    padding: 15px;
    background-color: #455ce9;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .submit-btn:hover {
    background-color: #1e1eff;
  }

  .contact-info {
    margin-top: 40px;
    text-align: center;
  }

  .social-icons {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 10px;

    a {
      color: #455ce9;
      font-size: 1.5rem;
      transition: color 0.3s ease;

      &:hover {
        color: #1e1eff;
      }
    }
  }
`;
