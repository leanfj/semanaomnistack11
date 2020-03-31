import React from "react";

import { Link } from "react-router-dom";

import imgLogo from "../../assets/logo.svg";
import { FiArrowLeft } from "react-icons/fi";

import "./styles.css";

export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={imgLogo} alt="Logo" />
          <p>
            Faça seu cadastro, entre na plataforma e ajude a pessoas a encontrar
            casos de sua ONG.
          </p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Retornar para tela de logon
          </Link>
        </section>
        <form>
          <input type="text" placeholder="Nome da ONG" />
          <input type="email" placeholder="Email" />
          <input placeholder="WhatsApp" />
          <div className="input-group">
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" style={{ width: 80 }} />
          </div>
        </form>
      </div>
    </div>
  );
}
