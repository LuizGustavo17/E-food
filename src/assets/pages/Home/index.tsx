import Header from '../../../components/Header'
import ProductsList from '../../../components/ProductsList'
import { GlobalCSS } from '../../../styles'
import Footer from '../../../components/Footer'
import { useGetRestaurantsQuery } from '../../../services/api'

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
  const { data: rest, isLoading } = useGetRestaurantsQuery()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!rest) {
    return <div>Error loading restaurants</div>
  }

  // Garantir que `rest` é um array
  const restaurantsArray: Restaurant[] = Array.isArray(rest) ? rest : [rest]

  return (
    <>
      <GlobalCSS />
      <div className="container">
        <Header />
      </div>
      <ProductsList restaurantes={restaurantsArray} />
      <Footer />
    </>
  )
}

export default Home
