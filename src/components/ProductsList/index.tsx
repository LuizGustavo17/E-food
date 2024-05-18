import Restaurante from '../../models/Restaurante'
import Product from '../Product'
import { Div_Center, Container } from './styles'

export type Props = {
  restaurantes: Restaurante[]
}

const ProductsList = ({ restaurantes }: Props) => (
  <Div_Center>
    <Container>
      {restaurantes.map((restaurante) => (
        <Product
          key={restaurante.id}
          title={restaurante.title}
          description={restaurante.description}
          image={restaurante.image}
          nota={restaurante.nota}
          infos={restaurante.infos}
          foods={restaurante.pratos}
          banner={restaurante.banner}
        />
      ))}
    </Container>
  </Div_Center>
)

export default ProductsList
