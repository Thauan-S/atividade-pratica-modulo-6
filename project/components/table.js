import React from "react";
import Link from "next/link";
import moment from "moment";
const Table = ({ clientes, reservas, contatos, destinos }) => {
  console.log(reservas)
  if (clientes) {
    return (
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col"># ID</th>
              <th scope="col">Nome</th>
              <th scope="col">Telefone</th>
              <th scope="col">Email</th>
              <th scope="col">Cep</th>
              <th scope="col">Data de Nascimento</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((i, index) => (
              <tr key={index}>
                <td>{i.id}</td>
                <td>{i.nome}</td>
                <td>{i.telefone}</td>
                <td>{i.email}</td>
                <td>{i.cep}</td>
                <td>{moment(i.dataNascimento).format("DD/MM/YYYY")}</td>
                <td>
                  <Link
                    href={`/clientes/update-clientes/${i.id}`}
                    type="button"
                    className="btn btn-primary"
                  >
                    <i className="bi bi-gear-fill" />
                  </Link>

                  <Link
                    href={`/clientes/delete-cliente/${i.id}`}
                    type="button"
                    className="btn btn-primary"
                  >
                    <i className="bi bi-trash"></i>
                  </Link>
                  <Link
                    href={`/contato/criar/${i.id}`}
                    type="button"
                    className="btn btn-primary"
                  >
                    <i className="bi bi-chat-dots"></i>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else if (reservas) {
    return (
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Cliente</th>
              <th scope="col">Data Reserva</th>
              <th scope="col">Data Viagem</th>
              <th scope="col">Pacote</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {reservas.map((i, index) => (
              <tr key={index}>
                <td>{i.id}</td>
                <td>{i.clienteId}</td>
                <td>{moment(i.dataReserva).format("DD/MM/YYYY")}</td>
                <td>{moment(i.dataViagem).format("DD/MM/YYYY")}</td>
                <td>{i.pacoteDeViagemId}</td>
                <td>
                  <Link
                    href={`/reserva/update-reserva/${i.id}`}
                    type="button"
                    className="btn btn-primary"
                  >
                    <i className="bi bi-gear-fill" />
                  </Link>

                  <Link
                    href={`/reserva/delete-reserva/${i.id}`}
                    type="button"
                    className="btn btn-primary"
                  >
                    <i className="bi bi-trash"></i>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else if (contatos) {
    return (
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col"># ID</th>
              <th scope="col">Cliente</th>
              <th scope="col">Assunto</th>
              <th scope="col">Mensagem</th>

              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {contatos.map((i, index) => (
              <tr key={index}>
                <td>{i.id}</td>
                <td>{i.clienteId}</td>
                <td>{i.assunto}</td>
                <td>{i.mensagem}</td>

                <td>
                  <Link
                    href={`/contato/update-contato/${i.id}`}
                    type="button"
                    className="btn btn-primary"
                  >
                    <i className="bi bi-gear-fill" />
                  </Link>

                  <Link
                    href={`/contato/delete-contato/${i.id}`}
                    type="button"
                    className="btn btn-primary"
                  >
                    <i className="bi bi-trash"></i>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else if (destinos) {
    return (
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col"># ID</th>
              <th scope="col">Destino</th>
              <th scope="col">Descrição</th>
              <th scope="col">Categoria</th>
              <th scope="col">Duração em dias</th>
              <th scope="col">imagem</th>
              <th scope="col">Preço</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {destinos.map((i, index) => (
              <tr key={index}>
                <td>{i.id}</td>
                <td>{i.destino}</td>
                <td>{i.descricao}</td>
                <td>{i.categoria}</td>
                <td>{i.duracaoEmDias}</td>
                <td>{i.imagem}</td>
                <td>{i.preco}</td>

                <td>
                  <Link
                    href={`/destinos/update-destino/${i.id}`}
                    type="button"
                    className="btn btn-primary"
                  >
                    <i className="bi bi-gear-fill" />
                  </Link>

                  <Link
                    href={`/destinos/delete-destino/${i.id}`}
                    type="button"
                    className="btn btn-primary"
                  >
                    <i className="bi bi-trash"></i>
                  </Link>

                  <Link
                    href={`/reserva/criar/${i.id}`}
                    type="button"
                    className="btn btn-primary"
                  >
                    {" "}
                    Reservar
                    <i className="bi bi-cart2"></i>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};

export default Table;
