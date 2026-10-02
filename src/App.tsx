import Promocao from './components/Promocao'
import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import Diferenciais from './components/Diferenciais'
import Cardapio from './components/Cardapio'
import ChamadaFinal from './components/ChamadaFinal'
import Rodape from './components/Rodape'

export default function App() {
  return (
    <>
      <Promocao />
      <Cabecalho />
      <main>
        <Hero />
        <Diferenciais />
        <Cardapio />
        <ChamadaFinal />
      </main>
      <Rodape />
    </>
  )
}
