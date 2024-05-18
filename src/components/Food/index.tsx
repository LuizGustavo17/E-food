import { Card, Img, Title, Description, Button } from './styles'
import { useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }
  return (
    <Card>
      <Img src={image} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Button onClick={handleClick}>Adicionar ao carrinho</Button>
    </Card>
  )
}

export default Food_Card
