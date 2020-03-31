import React from "react";

import { Link } from "react-router-dom";

import { FiArrowLeft } from "react-icons/fi";

import imgLogo from "../../assets/logo.svg";

import "./styles.css";

export default function NewIncident() {
  return (
    <div className="incident-container">
      <div className="content">
        <section>
          <img src={imgLogo} alt="Logo" />
          <h1>Cadastro novo caso</h1>
          <p>Faça seu cadastro novos casos de sua ONG.</p>
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            Retornar para tela de perfil
          </Link>
        </section>
        <form>
          <input type="text" placeholder="Titulo do caso" />
          <textarea type="text" placeholder="Descrição do caso" />
          <input type="text" placeholder="Valor" />
          <button type="submit" className="button">
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
}
