import FoodList from '../../../components/FoodList'
import { Restaurant } from '../Home'
import Second_Header from '../../../components/Second_Header'
import { GlobalCSS } from '../../../styles'
import Footer from '../../../components/Footer'
import { useParams } from 'react-router-dom'
import { useGetRestaurantsQuery } from '../../../services/api'

const Perfil: React.FC = () => {
  const { data: rest, isLoading } = useGetRestaurantsQuery()
  const { id } = useParams<{ id?: string }>()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!rest) {
    return <div>Error loading restaurants</div>
  }

  // Garantir que `rest` é um array
  const restaurantsArray: Restaurant[] = Array.isArray(rest) ? rest : [rest]

  if (id === undefined) {
    return <div>Invalid restaurant ID</div>
  }
  // Convertendo a string 'id' para número
  const Id_number = parseInt(id, 10)

  // Checando se a conversão foi bem-sucedida
  if (isNaN(Id_number)) {
    return <div>Invalid restaurant ID</div>
  }
  const selectedRestaurant = restaurantsArray[Id_number - 1]
  if (!selectedRestaurant) {
    return <div>Loading...</div>
  }
  return (
    <>
      <GlobalCSS />
      <div className="container">
        <Second_Header
          banner_image={restaurantsArray[Id_number - 1].capa}
          name={restaurantsArray[Id_number - 1].titulo}
          type={restaurantsArray[Id_number - 1].tipo}
        />
      </div>
      <FoodList foods={restaurantsArray[Id_number - 1].cardapio} />
      <Footer />
    </>
  )
}
export default Perfil
