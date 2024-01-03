import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";

const criarPacote = () => {
  const [newPackage, setNewPackage] = useState({
    destino: "",
    descricao: "",
    duracaoEmDias: "",
    preco: "",
    categoria: "",
    imagem: "",
  });

  const router = useRouter();
  const handleInputChange = (e) => {
    setNewPackage({ ...newPackage, [e.target.name]: e.target.value });
  };
  const handleAddPackage = () => {
    axios
      .post("https://localhost:7250/api/PacoteDeViagens/", newPackage)
      .then((response) => {
        router.push("/destinos");
      })
      .catch((error) => {
        alert("erro ao criar um novo pacote" + error);
      });
  };

  return (
    <main>
      <div className="container formulario">
        <div className="form-floating"></div>
        <div className="form-floating mt-4">
          <input
            className="form-control"
            name="destino"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            onChange={handleInputChange}
            value={newPackage.destino}
          />
          <label htmlFor="floatingTextarea">Destino</label>
        </div>
        <div className="form-floating">
          <input
            className="form-control mt-1"
            name="descricao"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            onChange={handleInputChange}
            style={{ height: 100 }}
            value={newPackage.descricao}
          />
          <label htmlFor="floatingTextarea2">Descrição </label>
        </div>
        <div className="form-floating">
          <input
            className="form-control mt-1"
            name="duracaoEmDias"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: 100 }}
            onChange={handleInputChange}
            value={newPackage.duracaoEmDias}
          />
          <label htmlFor="floatingTextarea2">Duracão em Dias </label>
        </div>
        <div className="form-floating">
          <input
            className="form-control mt-1"
            name="preco"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: 100 }}
            onChange={handleInputChange}
            value={newPackage.preco}
          />
          <label htmlFor="floatingTextarea2">Preço </label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control mt-1"
            name="imagem"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            value={newPackage.imagem}
            onChange={handleInputChange}
            style={{ height: 10 }}
          />
          <label htmlFor="floatingTextarea2">Imagem </label>
        </div>
        <div className="form-floating">
          <input
            className="form-control mt-1"
            name="categoria"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            onChange={handleInputChange}
            style={{ height: 10 }}
            value={newPackage.categoria}
          />
          <label htmlFor="floatingTextarea2">categoria </label>
        </div>
        <button
          onClick={handleAddPackage}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
          className="btn btn-primary mt-2 mb-2"
        >
          Enviar
        </button>
        <div className="collapse mt-1" id="collapseExample">
          <div className="card alert alert-success text-center card-body">
            Dados enviados com sucesso
          </div>
        </div>
      </div>
    </main>
  );
};

export default criarPacote;
