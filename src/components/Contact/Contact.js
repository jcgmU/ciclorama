// src/components/Contact/Contact.js
import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const ContactSection = styled.section`
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

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Aquí puedes manejar el envío del formulario (e.g., enviar a un API)
    console.log(data);
    alert("Mensaje enviado correctamente!");
    reset();
  };

  return (
    <ContactSection data-scroll-container>
      <div className="form-container visible">
        <h2>Contacto</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group">
            <label htmlFor="name">Nombre</label>
            <input
              id="name"
              type="text"
              {...register("name", { required: true })}
              placeholder="Tu nombre"
            />
            {errors.name && <span>Este campo es requerido.</span>}
          </div>
          <div className="input-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              id="email"
              type="email"
              {...register("email", { required: true })}
              placeholder="Tu correo electrónico"
            />
            {errors.email && <span>Este campo es requerido.</span>}
          </div>
          <div className="input-group">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              rows="5"
              {...register("message", { required: true })}
              placeholder="Tu mensaje"
            ></textarea>
            {errors.message && <span>Este campo es requerido.</span>}
          </div>
          <button type="submit" className="submit-btn">
            Enviar
          </button>
        </form>
        <div className="contact-info">
          <p>Teléfono: +34 123 456 789</p>
          <p>Email: contacto@ciclorama.com</p>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </ContactSection>
  );
};

export default Contact;
