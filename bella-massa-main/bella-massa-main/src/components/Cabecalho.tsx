import { Button, Container, Nav, Navbar } from 'react-bootstrap'

export default function Cabecalho() {
  return (
    <Navbar expand="lg" variant="dark" sticky="top" className="navbar-pizza">
      <Container>
        <Navbar.Brand href="#inicio">
          <img src="/img/logo.svg" width="36" alt="" className="me-2" />
          Bella Massa
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="menu" />
        <Navbar.Collapse id="menu">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link href="#inicio">Início</Nav.Link>
            <Nav.Link href="#diferenciais">Diferenciais</Nav.Link>
            <Nav.Link href="#cardapio">Cardápio</Nav.Link>
            <Button variant="pizza" href="#pedido" className="ms-lg-3">
              Peça já
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
