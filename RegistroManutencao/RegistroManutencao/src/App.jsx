import { useState } from 'react'
import NavBar from './components/NavBar'
import FormManutencao from './components/FormManutencao'
import TabelaManutencoes from './components/TabelaManutencoes'

function App() {

  const [manutencoes, setManutencoes] = useState([])
  const [abaAtiva, setAbaAtiva] = useState('registro')

  return (
    <>
      <NavBar
        abaAtiva={abaAtiva}
        setAbaAtiva={setAbaAtiva}
      />

      <main className="container mt-4">

        {abaAtiva === 'registro' && (
          <section>

            <h1 className="mb-4">Registro de Manutenção</h1>

            <FormManutencao
              manutencoes={manutencoes}
              setManutencoes={setManutencoes}
            />

            <TabelaManutencoes manutencoes={manutencoes} />

          </section>
        )}

        {abaAtiva === 'historico' && (
          <section>

            <h1 className="mb-4">Histórico de Manutenções</h1>

            <TabelaManutencoes manutencoes={manutencoes} />
            
          </section>
        )}

      </main>
    </>
  )
}

export default App