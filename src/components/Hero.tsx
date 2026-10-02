import { Button, Col, Container, Row } from 'react-bootstrap'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <h1>
              A verdadeira pizza <span>napolitana</span>, feita no forno a lenha
            </h1>
            <p className="lead my-4">
              Massa de fermentação lenta e ingredientes frescos.
            </p>
            <Button variant="pizza" size="lg" href="#cardapio" className="me-3">
              Ver cardápio
            </Button>
            <Button variant="outline-light" size="lg" href="#pedido">
              Pedir pelo WhatsApp
            </Button>
          </Col>
          <Col lg={6} className="text-center">
            <img src="/img/hero-pizza.svg" alt="Pizza margherita"
                 className="img-fluid hero-img" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
