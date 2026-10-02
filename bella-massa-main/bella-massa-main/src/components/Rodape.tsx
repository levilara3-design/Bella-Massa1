import { Container } from 'react-bootstrap'

export default function Rodape() {
  return (
    <footer className="rodape py-4">
      <Container className="text-center">
        <small>© {new Date().getFullYear()} Pizzaria Bella Massa | Rua Conde de Bonfim, 1000, Tijuca</small>
      </Container>
    </footer>
  )
}
