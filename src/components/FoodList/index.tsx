import Food from '../../models/Food'
import Food_Card from '../Food'
import { Container } from './styles'
import { Div_Center } from './styles'
export type Props = {
  foods: Food[]
}
const FoodList = ({ foods }: Props) => (
  <Div_Center>
    <Container>
      {foods.map((food) => (
        <Food_Card
          key={food.id}
          title={food.title}
          description={food.description}
          image={food.image}
          persons={food.persons}
          details={food.details}
          price={food.price}
        />
      ))}
    </Container>
  </Div_Center>
)

export default FoodList
