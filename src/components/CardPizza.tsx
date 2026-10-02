import { Badge, Card } from 'react-bootstrap'
import type { Pizza } from '../types'

interface CardPizzaProps {
  pizza: Pizza
}

export default function CardPizza({ pizza }: CardPizzaProps) {
  const preco = pizza.preco.toLocaleString('pt-BR', {
    style: 'currency', currency: 'BRL',
  })

  return (
    <Card className="h-100 border-0 shadow-sm">
      <Card.Img variant="top" src={pizza.imagem} alt={`Pizza ${pizza.nome}`} />
      <Card.Body>
        <Badge bg={pizza.categoria === 'doce' ? 'secondary' : 'danger'}>
          {pizza.categoria}
        </Badge>
        <Card.Title as="h3" className="h5 mt-2">{pizza.nome}</Card.Title>
        <Card.Text className="text-muted">{pizza.descricao}</Card.Text>
        <strong className="preco">{preco}</strong>
      </Card.Body>
    </Card>
  )
}
