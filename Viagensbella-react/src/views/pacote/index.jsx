import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PacoteService from "../../services/PacoteService";

export default function Pacotes() {
  const [pacotes, setPacotes] = useState([]);

  const getAllPacotes = () => {
    PacoteService.getAllPacotes()
      .then((response) => {
        setPacotes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllPacotes();
  }, []);

  const deletePacote = (id) => {
    PacoteService.deletePacote(id)
      .then((response) => {
        getAllPacotes();
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
        <h1 className="container">Cadastro dos Pacotes de viagens</h1>
      </header>
      <div className="container p-5">
        <Link to="/Pacotes-Create" className="btn btn-primary mb-2">
          Criar Pacote
        </Link>
        <div className="table-responsive">
          <table className="table table-hover table-sm">
            <thead>
              <tr>
                <th>Id</th>
                <th>Destino</th>
                <th>Valor</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {pacotes.map((pacote) => (
                <tr key={pacote.id}>
                  <td>{pacote.id}</td>
                  <td>{pacote.destino}</td>
                  <td>{pacote.valor}</td>
                  <td className="d-flex">
                    <Link
                      to={`/Pacotes-Update/${pacote.id}`}
                      className="btn btn-info"
                    >
                      Editar
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deletePacote(pacote.id)}
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
