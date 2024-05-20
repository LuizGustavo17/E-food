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
        <Food_Card
          key={food.id}
          title={food.nome}
          description={food.descricao}
          image={food.foto}
          persons={food.porcao}
          details={food.descricao}
          price={food.preco}
        />
      ))}
    </Container>
  </Div_Center>
)

export default FoodList
