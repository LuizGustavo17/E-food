import { HeaderBar, Logotipo } from './styles'
import logo from '../../assets/images/logo.png'
import { Home_Phrase } from '../Fonts/styles'
const Header = () => (
  <HeaderBar>
    <Logotipo src={logo} alt="logotipo do restaurante(garfo e faca)" />
    <Home_Phrase>
      Viva experiências gastronômicas no conforto da sua casa
    </Home_Phrase>
  </HeaderBar>
)

export default Header
