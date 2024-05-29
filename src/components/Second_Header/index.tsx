import { DivItens, Header_Perfil, Image, Box1, Box2, } from './styles'
import logo from '../../assets/images/logo.png'
import { Logotipo } from '../Header/styles'
import { BannerPhrase1, BannerPhrase2, Profile_Phrase, Phrase2 } from '../Fonts/styles'
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
        <Box2>
        <Profile_Phrase onClick={handleClick}>Restaurantes</Profile_Phrase>
        <Phrase2 onClick={openCart}>
          {items.length} produto{'('}s{')'} no carrinho
        </Phrase2>
        </Box2>
        <Logotipo src={logo} alt="logotipo do restaurante(garfo e faca)" />
      </Header_Perfil>
      <DivItens>
       <Box1>
        <BannerPhrase1>{capitalizeFirstLetter(type)}</BannerPhrase1>
        <BannerPhrase2>{name}</BannerPhrase2>
       </Box1>
        
        <Image src={banner_image} />
      </DivItens>
    </>
  )
}

export default Second_Header
