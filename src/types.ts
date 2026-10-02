export type Categoria = 'salgada' | 'doce'

export interface Pizza {
  id: number
  nome: string
  descricao: string
  preco: number
  imagem: string
  categoria: Categoria
}

export interface Diferencial {
  icone: string
  titulo: string
  texto: string
}
