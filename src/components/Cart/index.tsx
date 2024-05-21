import {
  Overlay,
  CartContainer,
  Sidebar,
  Pvalue,
  Pprice,
  Button,
  CartItem
} from './styles'
import Lixeira from '../../assets/images/Lixeira.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

const Cart = () => {
  const dispatch = useDispatch()
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, item) => {
      return (acumulador += item.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul style={{ marginBottom: '40px' }}>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <p>
                  R${' '}
                  {item.preco.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  })}
                </p>
                <img
                  id="lixeira"
                  src={Lixeira}
                  onClick={() => removeItem(item.id)}
                />
              </div>
            </CartItem>
          ))}
        </ul>
        <p>
          <Pvalue>Valor Total de </Pvalue>
          <Pprice>
            R${' '}
            {getTotalPrice().toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })}
          </Pprice>
        </p>
        <Button>Continuar com a entrega</Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
