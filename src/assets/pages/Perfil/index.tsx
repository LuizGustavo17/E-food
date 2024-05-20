import FoodList from '../../../components/FoodList'
import { Restaurant } from '../Home'
import Second_Header from '../../../components/Second_Header'
import { GlobalCSS } from '../../../styles'
import Footer from '../../../components/Footer'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Perfil: React.FC = () => {
  const [rest, setRest] = useState<Restaurant[]>([])
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRest(res))
  }, [])
  const { id } = useParams<{ id?: string }>()

  if (id === undefined) {
    return <div>Invalid restaurant ID</div>
  }
  // Convertendo a string 'id' para número
  const Id_number = parseInt(id, 10)

  // Checando se a conversão foi bem-sucedida
  if (isNaN(Id_number)) {
    return <div>Invalid restaurant ID</div>
  }
  const selectedRestaurant = rest[Id_number - 1]
  if (!selectedRestaurant) {
    return <div>Loading...</div>
  }
  return (
    <>
      <GlobalCSS />
      <div className="container">
        <Second_Header banner_image={rest[Id_number - 1].capa} />
      </div>
      <FoodList foods={rest[Id_number - 1].cardapio} />
      <Footer />
    </>
  )
}
export default Perfil
