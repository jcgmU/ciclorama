// src/components/Contact/Contact.js
import React from "react";
import { useForm } from "react-hook-form";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { ContactSection } from "./ContactStyles";

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
