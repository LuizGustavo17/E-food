import { Restaurant } from '../../assets/pages/Home'
import Product from '../Product'
import { Div_Center, Container } from './styles'

export type Props = {
  restaurantes: Restaurant[] // Corrigido aqui
}

const ProductsList = ({ restaurantes }: Props) => {
  function capitalizeFirstLetter(string: string) {
    if (typeof string !== 'string' || string.length === 0) {
      return ''
    }
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  function RetornaInfos(destacado: boolean, tipo: string) {
    const infos = []
    if (destacado == true) {
      infos[0] = 'Destaques da Semana'
      infos[1] = capitalizeFirstLetter(tipo)
    } else {
      infos[0] = capitalizeFirstLetter(tipo)
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
