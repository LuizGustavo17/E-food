import { Card, Img, Title, Description, Button } from './styles'
import { useState } from 'react'
import Modal from '../Modal'
import { Pratos } from '../../assets/pages/Home'
type Props = {
  prato: Pratos
}
export const Food_Card = ({ prato }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 163) {
      return descricao.slice(0, 160) + '...'
    }
    return descricao
  }
  const [showModal, setShowModal] = useState(false)

  const handleOpenModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }
  const handleClick = () => {
    handleOpenModal()
  }

  return (
    <Card>
      <Img src={prato.foto} />
      <Title>{prato.nome}</Title>
      <Description>{getDescricao(prato.descricao)}</Description>
      <Button onClick={handleClick}>Adicionar ao carrinho</Button>
      <Modal show={showModal} onClose={handleCloseModal} prato={prato}></Modal>
    </Card>
  )
}

export default Food_Card
