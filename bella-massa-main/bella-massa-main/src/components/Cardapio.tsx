import { useState } from 'react'
import {
  Col, Container, Row, ToggleButton, ToggleButtonGroup,
} from 'react-bootstrap'
import { pizzas } from '../data/pizzas'
import type { Categoria } from '../types'
import CardPizza from './CardPizza'

type Filtro = Categoria | 'todas'

const opcoes: [Filtro, string][] = [
  ['todas', 'Todas'], ['salgada', 'Salgadas'], ['doce', 'Doces'],
]

export default function Cardapio() {
  const [filtro, setFiltro] = useState<Filtro>('todas')
  const lista = filtro === 'todas'
    ? pizzas
    : pizzas.filter((p) => p.categoria === filtro)

  return (
    <section id="cardapio" className="py-5">
      <Container>
        <h2 className="text-center">Escolha a sua favorita</h2>
        <div className="text-center my-4">
          <ToggleButtonGroup type="radio" name="filtro" value={filtro}
            onChange={(v: Filtro) => setFiltro(v)}>
            {opcoes.map(([valor, rotulo]) => (
              <ToggleButton key={valor} id={valor} value={valor}
                variant="outline-danger">
                {rotulo}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </div>
        <Row className="g-4">
          {lista.map((pizza) => (
            <Col md={6} lg={4} key={pizza.id}>
              <CardPizza pizza={pizza} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
