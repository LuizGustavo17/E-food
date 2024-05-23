import { Header_Perfil, Image } from './styles'
import logo from '../../assets/images/logo.png'
import { Logotipo } from '../Header/styles'
import { BannerPhrase1, BannerPhrase2, Phrase1, Phrase2 } from '../Fonts/styles'
import { useNavigate } from 'react-router-dom'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
export type Props = {
  banner_image: string
  type: string
  name: string
}
const Second_Header = ({ banner_image, type, name }: Props) => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }
  function capitalizeFirstLetter(string: string) {
    if (typeof string !== 'string' || string.length === 0) {
      return ''
    }
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }
  return (
    <>
      <Header_Perfil>
        <Phrase1 onClick={handleClick}>Restaurantes</Phrase1>
        <Logotipo src={logo} alt="logotipo do restaurante(garfo e faca)" />
        <Phrase2 onClick={openCart}>
          {items.length} produto{'('}s{')'} no carrinho
        </Phrase2>
      </Header_Perfil>
      <div style={{ position: 'relative' }}>
        <BannerPhrase1>{capitalizeFirstLetter(type)}</BannerPhrase1>
        <BannerPhrase2>{name}</BannerPhrase2>
        <Image src={banner_image} />
      </div>
    </>
  )
}

export default Second_Header
