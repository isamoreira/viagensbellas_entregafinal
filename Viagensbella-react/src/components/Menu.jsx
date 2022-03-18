import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Bellas Viagens
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/Contatos" className="nav-link text-dark ">
                Contatos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Pacotes" className="nav-link text-dark">
                Pacotes
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
