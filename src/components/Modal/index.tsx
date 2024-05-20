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
interface ModalProps {
  show: boolean
  onClose: () => void
  persons: string
  title: string
  details: string
  price: number
  image: string
}

const Modal: React.FC<ModalProps> = ({
  show,
  onClose,
  title,
  persons,
  details,
  price,
  image
}) => {
  if (!show) {
    return null
  }

  return (
    <Banner_Overlay>
      <Banner_Details>
        <Close_Button src={Close_1} onClick={onClose} />
        <Img src={image} />
        <Modal_Title>{title}</Modal_Title>
        <Modal_Details>{details}</Modal_Details>
        <Modal_Persons>{persons}</Modal_Persons>
        <Add_to_Cart>
          Adicionar ao carrinho - R${' '}
          {price.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          })}
        </Add_to_Cart>
      </Banner_Details>
    </Banner_Overlay>
  )
}

export default Modal
