import { useState } from "react";

export default function FormLivro({ onEnviar }) {

    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [categoria, setCategoria] = useState("");
    const [ano, setAno] = useState("");

    const [erros, setErros] = useState({});
    const [ok, setOk] = useState(false);

    function validar() {
        const novos = {};

        if (titulo.trim().length < 3) {
            novos.titulo = "Título deve ter no mínimo 3 caracteres";
        }

        if (autor.trim().length < 3) {
            novos.autor = "Autor deve ter no mínimo 3 caracteres";
        }

        if (!categoria) {
            novos.categoria = "Escolha uma categoria";
        }

        const anoAtual = new Date().getFullYear();

        if (!ano) {
            novos.ano = "Informe o ano de publicação";
        } else if (Number(ano) <= 1900) {
            novos.ano = "O ano deve ser maior que 1900";
        } else if (Number(ano) > anoAtual) {
            novos.ano = "O ano não pode ser futuro";
        }

        return novos;
    }

    function handleSubmit(e) {
        e.preventDefault();

        const novos = validar();

        setErros(novos);

        if (Object.keys(novos).length > 0) return;

        onEnviar({
            titulo,
            autor,
            categoria,
            ano
        });

        setTitulo("");
        setAutor("");
        setCategoria("");
        setAno("");

        setOk(true);
    }

    return (
        <form className="row g-3" onSubmit={handleSubmit} noValidate>

            <div className="col-md-6">
                <label htmlFor="titulo" className="form-label">
                    Título
                </label>

                <input
                    id="titulo"
                    name="titulo"
                    type="text"
                    className={`form-control ${erros.titulo ? "is-invalid" : ""}`}
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                />

                <div className="invalid-feedback">
                    {erros.titulo}
                </div>
            </div>

            <div className="col-md-6">
                <label htmlFor="autor" className="form-label">
                    Autor
                </label>

                <input
                    id="autor"
                    name="autor"
                    type="text"
                    className={`form-control ${erros.autor ? "is-invalid" : ""}`}
                    value={autor}
                    onChange={(e) => setAutor(e.target.value)}
                />

                <div className="invalid-feedback">
                    {erros.autor}
                </div>
            </div>

            <div className="col-md-6">
                <label htmlFor="categoria" className="form-label">
                    Categoria
                </label>

                <select
                    id="categoria"
                    name="categoria"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                    className={`form-select ${erros.categoria ? "is-invalid" : ""}`}
                >
                    <option value="">Selecione uma categoria</option>
                    <option value="Romance">Romance</option>
                    <option value="Técnico">Técnico</option>
                    <option value="Infantil">Infantil</option>
                    <option value="Biografia">Biografia</option>
                </select>

                <div className="invalid-feedback">
                    {erros.categoria}
                </div>
            </div>

            <div className="col-md-6">
                <label htmlFor="ano" className="form-label">
                    Ano de publicação
                </label>

                <input
                    id="ano"
                    name="ano"
                    type="number"
                    className={`form-control ${erros.ano ? "is-invalid" : ""}`}
                    value={ano}
                    onChange={(e) => setAno(e.target.value)}
                />

                <div className="invalid-feedback">
                    {erros.ano}
                </div>
            </div>

            <div className="col-12 d-flex gap-3">
                <button className="btn btn-secondary rounded-pill px-3">
                    Cadastrar
                </button>

                {ok && (
                    <span className="text-success">
                        Livro cadastrado!
                    </span>
                )}
            </div>

        </form>
    );
}