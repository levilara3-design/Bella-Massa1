import { Button, Container } from 'react-bootstrap'
import { formatarTelefone, whatsapp } from '../config'

export default function ChamadaFinal() {
  return (
    <section id="pedido" className="chamada text-center text-white py-5">
      <Container>
        <h2>Bateu a fome?</h2>
        <p className="lead mb-4">Peça agora e receba em até 40 minutos.</p>
        <Button variant="success" size="lg" href={`https://wa.me/${whatsapp}`}>
          <i className="bi bi-whatsapp me-2"></i>
          {formatarTelefone(whatsapp)}
        </Button>
      </Container>
    </section>
  )
}
