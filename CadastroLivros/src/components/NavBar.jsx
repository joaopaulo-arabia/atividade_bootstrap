import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar({ paginaAtual, onMudarPagina }) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              active={paginaAtual === "form"}
              onClick={() => onMudarPagina("form")}
            >
              Matrícula
            </Nav.Link>
            <Nav.Link
              active={paginaAtual === "Table"}
              onClick={() => onMudarPagina("Table")}
            >
              Alunos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;