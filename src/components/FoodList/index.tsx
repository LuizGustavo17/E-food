import { Pratos } from '../../assets/pages/Home'
import Food_Card from '../Food'
import { Container } from './styles'
import { Div_Center } from './styles'
export type Props = {
  foods: Pratos[]
}
const FoodList = ({ foods }: Props) => (
  <Div_Center>
    <Container>
      {foods.map((food) => (
        <Food_Card key={food.id} prato={food} />
      ))}
    </Container>
  </Div_Center>
)

export default FoodList
