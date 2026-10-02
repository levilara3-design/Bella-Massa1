# Pizzaria Bella Massa | Landing Page em React + TypeScript

Projeto de demonstração da aula de Desenvolvimento Frontend II (UVA).

## Tecnologias
- React + TypeScript (Vite, template `react-ts`)
- React-Bootstrap + Bootstrap Icons

## Como executar
npm install
npm run dev

## Como gerar a versão de produção
npm run build
npm run preview

## Publicação no Netlify
- Build command: npm run build
- Publish directory: dist

## Variaveis de ambiente
| Chave | Exemplo | Uso |
|---|---|---|
| VITE_WHATSAPP | 5521999990000 | Numero do botao de pedido |
| VITE_PROMOCAO | Terca em dobro! | Faixa de promocao no topo (opcional) |

Local: copie `.env.example` para `.env.local`.
Netlify: Project configuration > Environment variables, depois faca um novo deploy.
