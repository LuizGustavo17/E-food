import Header from '../../../components/Header'
import ProductsList from '../../../components/ProductsList'
import { GlobalCSS } from '../../../styles'
import Footer from '../../../components/Footer'
import { useEffect, useState } from 'react'
export type Pratos = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}
export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Pratos[]
}
const Home = () => {
  const [rest, setRest] = useState<Restaurant[]>([])
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRest(res))
  }, [])
  return (
    <>
      <GlobalCSS />
      <div className="container">
        <Header />
      </div>
      <ProductsList restaurantes={rest} />
      <Footer />
    </>
  )
}

export default Home
