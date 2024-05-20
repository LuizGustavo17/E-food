import { Card, Img, Title, Description, Button } from './styles'
import { useState } from 'react'
import Modal from '../Modal'
type Props = {
  title: string
  description: string
  image: string
  details: string
  persons: string
  price: number
}
const Food_Card = ({
  title,
  description,
  image,
  details,
  persons,
  price
}: Props) => {
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
      <Img src={image} />
      <Title>{title}</Title>
      <Description>{getDescricao(description)}</Description>
      <Button onClick={handleClick}>Adicionar ao carrinho</Button>
      <Modal
        show={showModal}
        onClose={handleCloseModal}
        persons={persons}
        title={title}
        details={details}
        price={price}
        image={image}
      ></Modal>
    </Card>
  )
}

export default Food_Card
