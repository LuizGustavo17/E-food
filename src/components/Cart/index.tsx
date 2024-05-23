import React, { useState } from 'react'
import {
  Title2,
  Label_Text,
  WhiteSpace,
  Button2,
  Pdonne
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
  const [showAddress, setShowAddress] = useState(0)

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
    setShowAddress(1)
  }
  const goToCart = () => {
    setShowAddress(0)
  }
  const reset = () => {
    setShowAddress(0)
    closeCart()
  }
  const goToCard = () => {
    setShowAddress(2)
  }
  const goToFinal = () => {
    setShowAddress(3)
  }
  if (showAddress === 0) {
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
  } else if (showAddress === 1) {
    return (
      <CartContainer className={isOpen ? 'is-open' : ''}>
        <Overlay onClick={reset} />
        <Sidebar>
          <Title2>Entrega</Title2>
          <Label_Text>Quem irá receber</Label_Text>
          <WhiteSpace type="text"></WhiteSpace>
          <Label_Text>Endereço</Label_Text>
          <WhiteSpace type="text"></WhiteSpace>
          <Label_Text>Cidade</Label_Text>
          <WhiteSpace type="text"></WhiteSpace>

          <div style={{ display: 'flex' }}>
            <div>
              <Label_Text>CEP</Label_Text>
              <WhiteSpace style={{ width: '155px' }} type="text"></WhiteSpace>
            </div>
            <div style={{ float: 'right', marginLeft: '34px' }}>
              <Label_Text>Número</Label_Text>
              <WhiteSpace
                style={{ width: '155px', display: 'flex' }}
                type="text"
              ></WhiteSpace>
            </div>
          </div>
          <Label_Text>
            Complemento{' ('}opcional{')'}
          </Label_Text>
          <WhiteSpace style={{ marginBottom: '0' }} type="text"></WhiteSpace>
          <Button2 onClick={goToCard} style={{ marginTop: '24px' }}>
            Continuar com o pagamento
          </Button2>
          <Button2 onClick={goToCart}>Voltar para o carrinho</Button2>
        </Sidebar>
      </CartContainer>
    )
  } else if (showAddress === 2) {
    return (
      <CartContainer className={isOpen ? 'is-open' : ''}>
        <Overlay onClick={reset} />
        <Sidebar>
          <Title2>
            Pagamento - Valor a pagar R${' '}
            {getTotalPrice().toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })}
          </Title2>
          <Label_Text>Nome no cartão</Label_Text>
          <WhiteSpace type="text"></WhiteSpace>
          <div style={{ display: 'flex' }}>
            <div>
              <Label_Text>Número no cartão</Label_Text>
              <WhiteSpace style={{ width: '228px' }} type="text"></WhiteSpace>
            </div>
            <div style={{ float: 'right' }}>
              <Label_Text>CVV</Label_Text>
              <WhiteSpace
                style={{ width: '87px', display: 'flex' }}
                type="text"
              ></WhiteSpace>
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div>
              <Label_Text>Mês de Vencimento</Label_Text>
              <WhiteSpace style={{ width: '155px' }} type="text"></WhiteSpace>
            </div>
            <div style={{ float: 'right', marginLeft: '34px' }}>
              <Label_Text>Ano de Vencimento</Label_Text>
              <WhiteSpace
                style={{ width: '155px', display: 'flex' }}
                type="text"
              ></WhiteSpace>
            </div>
          </div>
          <Button2 onClick={goToFinal} style={{ marginTop: '24px' }}>
            Finalizar pagamento
          </Button2>
          <Button2 onClick={goToAddress}>
            Voltar para a edição de endereço
          </Button2>
        </Sidebar>
      </CartContainer>
    )
  } else if (showAddress === 3) {
    return (
      <CartContainer className={isOpen ? 'is-open' : ''}>
        <Overlay onClick={reset} />
        <Sidebar>
          <Title2>Pedido Realizado - 99</Title2>
          <Pdonne>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
            <br />
            <br />
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
            <br />
            <br />
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
            <br />
            <br />
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </Pdonne>
          <Button2 onClick={reset}>Concluir</Button2>
        </Sidebar>
      </CartContainer>
    )
  } else {
    return <></>
  }
}

export default Cart
