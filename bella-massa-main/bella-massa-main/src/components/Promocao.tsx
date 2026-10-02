import { Alert } from 'react-bootstrap'
import { promocao } from '../config'

// So aparece se VITE_PROMOCAO estiver preenchida
export default function Promocao() {
  if (!promocao) return null

  return (
    <Alert variant="warning"
      className="text-center mb-0 rounded-0 fw-semibold">
      <i className="bi bi-megaphone-fill me-2"></i>
      {promocao}
    </Alert>
  )
}
