import { useState } from 'react'
import NavBar from './components/NavBar'

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
            <h1>Registro de Manutenção</h1>
          </section>
        )}

        {abaAtiva === 'historico' && (
          <section>
            <h1>Histórico de Manutenções</h1>
          </section>
        )}

      </main>
    </>
  )
}

export default App