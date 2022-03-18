import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContatoService from "../../services/ContatoService";

export default function Contatos() {
  const [contatos, setContatos] = useState([]);

  const getAllContatos = () => {
    ContatoService.getAllContatos()
      .then((response) => {
        setContatos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllContatos();
  }, []);

  const deleteContato = (id) => {
    ContatoService.deleteContato(id)
      .then((response) => {
        getAllContatos();
      })
      .catch((error) => {
        console.log(error);
        const { data } = error.response;
        if (data.status === 500) {
          alert("Erro na API");
        }
      });
  };

  return (
    <>
      <header className="header">
        <h1 className="container">Cadastro Contato</h1>
      </header>
      <div className="container p-5">
        <Link to="/Contatos-Create" className="btn btn-primary mb-2">
          Criar Contato
        </Link>
        <div className="table-responsive">
          <table className="table table-hover table-sm">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {contatos.map((contato) => (
                <tr key={contato.id}>
                  <td>{contato.id}</td>
                  <td>{contato.nome}</td>
                  <td>{contato.email}</td>
                  <td>{contato.telefone}</td>
                  <td className="d-flex">
                    <Link
                      to={`/Contatos-Update/${contato.id}`}
                      className="btn btn-info"
                    >
                      Editar
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteContato(contato.id)}
                      style={{ marginLeft: "10px" }}
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
