import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ContatoService from "../../services/ContatoService";

export default function Create() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const criarOuEditarContato = (e) => {
    e.preventDefault();

    const contato = { nome, email, telefone};

    if (id) {
        ContatoService.updateContato(id, contato)
        .then((response) => {
            navigate("/Contatos")
        })

    } else {
        ContatoService.createContato(contato)
        .then((response) => {
            navigate("/Contatos")
        })
    }
  }

  useEffect(() => {
      function getContatoById() {
        if (id) {
            ContatoService.getContatoById(id)
            .then((response) => {
                setNome(response.data.nome);
                setEmail(response.data.email);
                setTelefone(response.data.telefone);
            })
            .catch((error) => {
                console.log(error);
            })
        }
      }
      getContatoById()
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
              Nome
            </label>
            <input
              type="text"
              id="Nome"
              className="form-control"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              Email
            </label>
            <input
              type="text"
              id="Email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="telefone" className="form-label">
              Telefone
            </label>
            <input
              type="text"
              id="Telefone"
              className="form-control"
              placeholder="Telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary" onClick={(e) => criarOuEditarContato(e)}>
            Enviar
          </button>
          <Link
            to="/Contatos"
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
