import {
  Banner_Details,
  Banner_Overlay,
  Close_Button,
  Img,
  Modal_Details,
  Modal_Title,
  Modal_Persons,
  Add_to_Cart
} from './styles'
import Close_1 from '../../assets/images/Close_1.png'
import { Pratos } from '../../assets/pages/Home'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
interface ModalProps {
  show: boolean
  onClose: () => void
  prato: Pratos
}
const Modal: React.FC<ModalProps> = ({ show, onClose, prato }) => {
  const dispatch = useDispatch()
  if (!show) {
    return null
  }
  const addToCart = () => {
    dispatch(add(prato))
    dispatch(open())
  }
  return (
    <Banner_Overlay>
      <Banner_Details>
        <Close_Button src={Close_1} onClick={onClose} />
        <Img src={prato.foto} />
        <Modal_Title>{prato.nome}</Modal_Title>
        <Modal_Details>{prato.descricao}</Modal_Details>
        <Modal_Persons>Serve: {prato.porcao}</Modal_Persons>
        <Add_to_Cart onClick={addToCart}>
          Adicionar ao carrinho - R${' '}
          {prato.preco.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          })}
        </Add_to_Cart>
      </Banner_Details>
    </Banner_Overlay>
  )
}

export default Modal
