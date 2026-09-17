function NavBar({ abaAtiva, setAbaAtiva }) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">

        <span className="navbar-brand">
          Registro de Manutenção
        </span>

        <div className="navbar-nav d-flex flex-row">

          <button
            className="nav-link me-3"
            onClick={() => setAbaAtiva('registro')}
          >
            Registro
          </button>

          <button
            className="nav-link"
            onClick={() => setAbaAtiva('historico')}
          >
            Histórico
          </button>

        </div>

      </div>
    </nav>
  )
}

export default NavBar