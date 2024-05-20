import { Restaurant } from '../../assets/pages/Home'
import Product from '../Product'
import { Div_Center, Container } from './styles'

export type Props = {
  restaurantes: Restaurant[] // Corrigido aqui
}

const ProductsList = ({ restaurantes }: Props) => {
  function RetornaInfos(destacado: boolean, tipo: string) {
    const infos = []
    if (destacado == true) {
      infos[0] = 'Destaques da Semana'
      infos[1] = tipo
    } else {
      infos[0] = tipo
    }
    return infos
  }
  return (
    <Div_Center>
      <Container>
        {restaurantes.map((restaurante) => (
          <Product
            key={restaurante.id}
            title={restaurante.titulo}
            description={restaurante.descricao}
            image={restaurante.capa}
            nota={restaurante.avaliacao}
            infos={RetornaInfos(restaurante.destacado, restaurante.tipo)}
            foods={restaurante.cardapio}
            banner={restaurante.capa}
            id={restaurante.id}
          />
        ))}
      </Container>
    </Div_Center>
  )
}

export default ProductsList
