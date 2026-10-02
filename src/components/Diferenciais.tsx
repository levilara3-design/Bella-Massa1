import { Card, Col, Container, Row } from 'react-bootstrap'
import { diferenciais } from '../data/diferenciais'

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="py-5 bg-creme">
      <Container>
        <h2 className="text-center mb-5">Por que a Bella Massa?</h2>
        <Row className="g-4">
          {diferenciais.map((d) => (
            <Col md={4} key={d.titulo}>
              <Card className="h-100 border-0 shadow-sm p-3">
                <Card.Body>
                  <i className={`bi ${d.icone} icone`}></i>
                  <Card.Title as="h3" className="h5 mt-3">{d.titulo}</Card.Title>
                  <Card.Text className="text-muted">{d.texto}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
