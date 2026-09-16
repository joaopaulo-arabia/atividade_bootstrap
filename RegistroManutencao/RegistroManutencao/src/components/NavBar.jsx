function NavBar({ abaAtiva, setAbaAtiva}){
    return(
        <nav className="navbar navbar-expand-lg bgldrak">
            <div className="container">
                <span className="navbar-brand text-white">
                    Registro de Manutenção
                </span>

                <div className="navbar-nav">
                    <button
                        className={`nav-link ${
                            abaAtiva === 'registro'
                            ? 'active text-white'
                            : 'text-white'
                        }`}
                        onClick={() => setAbaAtiva('registro')}
                        >
                            Registro
                    </button>

                    <button
                        className={`nav-link ${                                
                            abaAtiva === 'historico'
                            ? 'active text-white'
                            : 'text-white'
                        }`}
                        onClick={() => setAbaAtiva ('historico')}
                        >
                            Histórico
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar