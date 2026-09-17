function TabelaManutencoes({ manutencoes }) {

  return (
    <div className="mt-5">

      <h2 className="mb-3">Manutenções registradas</h2>

      {manutencoes.length === 0 ? (
        <p className="text-muted">
          Nenhuma manutenção registrada.
        </p>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-bordered">

            <thead>
              <tr>
                <th>Equipamento</th>
                <th>Tipo</th>
                <th>Responsável</th>
                <th>Descrição</th>
              </tr>
            </thead>

            <tbody>
              {manutencoes.map((manutencao, index) => (
                <tr key={index}>
                    <td>{manutencao.equipamento}</td>
                    <td>
                        <span
                            className={
                            manutencao.tipo === 'Preventiva'
                                ? 'badge bg-success'
                                : manutencao.tipo === 'Corretiva'
                                ? 'badge bg-danger'
                                : 'badge bg-primary'
                            }
                        >
                            {manutencao.tipo}
                        </span>
                    </td>
                    <td>{manutencao.responsavel}</td>
                    <td>{manutencao.descricao}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      )}

    </div>
  )
}

export default TabelaManutencoes