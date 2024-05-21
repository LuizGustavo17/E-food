import { Header_Perfil, Image } from './styles'
import logo from '../../assets/images/logo.png'
import { Logotipo } from '../Header/styles'
import { Phrase1, Phrase2 } from '../Fonts/styles'
import { useNavigate } from 'react-router-dom'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
export type Props = {
  banner_image: string
}
const Second_Header = ({ banner_image }: Props) => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
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
      <Image src={banner_image} />
    </>
  )
}

export default Second_Header
