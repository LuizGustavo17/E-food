import React, { useState } from 'react'
import {
  Title2,
  Label_Text,
  WhiteSpace,
  WhiteSpaceSmall,
  FormGroup,
  Disflex,
  Button2
} from '../Adress/styles'
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
  const [showAddress, setShowAddress] = useState(false)

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

  const goToAddress = () => {
    setShowAddress(true)
  }
  const goToCart = () => {
    setShowAddress(false)
  }
  const reset = () => {
    setShowAddress(false)
    closeCart()
  }
  if (!showAddress) {
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
          <Button onClick={goToAddress}>Continuar com a entrega</Button>
        </Sidebar>
      </CartContainer>
    )
  } else {
    return (
      <CartContainer className={isOpen ? 'is-open' : ''}>
        <Overlay onClick={reset} />
        <Sidebar>
          <>
            <Title2>Entrega</Title2>
            <Label_Text>Quem irá receber</Label_Text>
            <WhiteSpace type="text"></WhiteSpace>
            <Label_Text>Endereço</Label_Text>
            <WhiteSpace type="text"></WhiteSpace>
            <Label_Text>Cidade</Label_Text>
            <WhiteSpace type="text"></WhiteSpace>
            <Disflex>
              <FormGroup>
                <Label_Text>CEP</Label_Text>
                <WhiteSpaceSmall></WhiteSpaceSmall>
              </FormGroup>
              <FormGroup>
                <Label_Text>Número</Label_Text>
                <WhiteSpaceSmall></WhiteSpaceSmall>
              </FormGroup>
            </Disflex>
            <Label_Text>
              Complemento{' ('}opcional{')'}
            </Label_Text>
            <WhiteSpace type="text"></WhiteSpace>
            <Button2 style={{ marginTop: '24px' }}>
              Continuar com o pagamento
            </Button2>
            <Button2 onClick={goToCart}>Voltar para o carrinho</Button2>
          </>
        </Sidebar>
      </CartContainer>
    )
  }
}

export default Cart
