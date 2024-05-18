import { Header_Perfil, Image } from './styles'
import logo from '../../assets/images/logo.png'
import { Logotipo } from '../Header/styles'
import { Phrase1, Phrase2 } from '../Fonts/styles'
import { useNavigate } from 'react-router-dom'
export type Props = {
  banner_image: string
}
const Second_Header = ({ banner_image }: Props) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }
  return (
    <>
      <Header_Perfil>
        <Phrase1 onClick={handleClick}>Restaurantes</Phrase1>
        <Logotipo src={logo} alt="logotipo do restaurante(garfo e faca)" />
        <Phrase2>
          0 produto{'('}s{')'} no carrinho
        </Phrase2>
      </Header_Perfil>
      <Image src={banner_image} />
    </>
  )
}

export default Second_Header
