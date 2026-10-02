import type { Pizza } from '../types'

export const pizzas: Pizza[] = [
  { id: 1, nome: 'Margherita', descricao: 'Molho de tomate, muçarela, tomate e manjericão.', preco: 45, imagem: '/img/margherita.svg', categoria: 'salgada' },
  { id: 2, nome: 'Calabresa', descricao: 'Calabresa artesanal, cebola roxa e azeitonas.', preco: 48, imagem: '/img/calabresa.svg', categoria: 'salgada' },
  { id: 3, nome: 'Quatro Queijos', descricao: 'Muçarela, provolone, parmesão e gorgonzola.', preco: 55, imagem: '/img/queijos.svg', categoria: 'salgada' },
  { id: 4, nome: 'Portuguesa', descricao: 'Presunto, ovos, ervilha, cebola e azeitonas.', preco: 52, imagem: '/img/portuguesa.svg', categoria: 'salgada' },
  { id: 5, nome: 'Frango com Catupiry', descricao: 'Frango desfiado temperado e Catupiry.', preco: 50, imagem: '/img/frango.svg', categoria: 'salgada' },
  { id: 6, nome: 'Chocolate com Morango', descricao: 'Chocolate ao leite e morangos frescos.', preco: 42, imagem: '/img/chocolate.svg', categoria: 'doce' },
]
