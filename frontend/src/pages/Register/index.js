import React, { useState } from "react";

import { Link } from "react-router-dom";

import imgLogo from "../../assets/logo.svg";
import { FiArrowLeft } from "react-icons/fi";

import "./styles.css";

import api from "../../services/api";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUF] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    const data = { name, email, whatsapp, city, uf };

    try {
      const response = await api.post("ongs", data);
      alert(`Seu id de acesso ${response.data.id}`);
    } catch (err) {
      alert("Error ao realizar cadastro, tente novamente");
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={imgLogo} alt="Logo" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude a pessoas a encontrar
            casos de sua ONG.
          </p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Retornar para tela de logon
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Nome da ONG"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />
          <div className="input-group">
            <input
              type="text"
              placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input
              type="text"
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={e => setUF(e.target.value)}
            />
          </div>
          <button type="submit" className="button">
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
}
