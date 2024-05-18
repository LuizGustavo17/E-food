import FoodList from '../../../components/FoodList'
import Second_Header from '../../../components/Second_Header'
import { GlobalCSS } from '../../../styles'
import { useLocation } from 'react-router-dom'
import Footer from '../../../components/Footer'

const Perfil = () => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const dataString = queryParams.get('data') ?? '[]'
  const dataArray = JSON.parse(dataString)
  const novo_banner = queryParams.get('novo_banner') ?? ''
  return (
    <>
      <GlobalCSS />
      <div className="container">
        <Second_Header banner_image={novo_banner} />
      </div>
      <FoodList foods={dataArray} />
      <Footer />
    </>
  )
}
export default Perfil
