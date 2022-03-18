import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import PacoteService from "../../services/PacoteService";

export default function Create() {
  const [destino, setDestino] = useState("");
  const [valor, setValor] = useState(0.0);
  const { id } = useParams();
  const navigate = useNavigate();

  const criarOuEditarPacote = (e) => {
    e.preventDefault();

    const pacote = { destino, valor};

    if (id) {
        PacoteService.updatePacote(id, pacote)
        .then((response) => {
            navigate("/Pacotes")
        })

    } else {
        PacoteService.createPacote(pacote)
        .then((response) => {
            navigate("/Pacotes")
        })
    }
  }

  useEffect(() => {
      function getPacoteById() {
        if (id) {
            PacoteService.getPacoteById(id)
            .then((response) => {
                setDestino(response.data.destino);
                setValor(response.data.valor);
            })
            .catch((error) => {
                console.log(error);
            })
        }
      }
      getPacoteById()
  }, [id]);

  return (
    <div className="container py-3">
      <form>
        <fieldset>
          <legend>
            <h2 className="text-center">{id ? "Editar" : "Criar"}</h2>
          </legend>
          <div className="mb-3">
            <label htmlFor="Nome" className="form-label">
              Destino
            </label>
            <input
              type="text"
              id="Destino"
              className="form-control"
              placeholder="Destino"
              value={destino}
              onChange={(e) => setDestino(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Valor" className="form-label">
              Valor
            </label>
            <input
              type="text"
              id="valor"
              className="form-control"
              placeholder="Valor"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary" onClick={(e) => criarOuEditarPacote(e)}>
            Enviar
          </button>
          <Link
            to="/Autores"
            className="btn btn-danger"
            style={{ marginLeft: "10px" }}
          >
            Cancelar
          </Link>
        </fieldset>
      </form>
    </div>
  );
}
