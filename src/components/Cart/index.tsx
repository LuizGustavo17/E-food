import React, { ChangeEvent, useState } from 'react'
import {
  Title2,
  Label_Text,
  WhiteSpace,
  Button2,
  Pdonne
} from '../FormStyles/styles'
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
import { close, remove, clear } from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../services/api'


const Cart = () => {
  const dispatch = useDispatch()
  const [purchase, { isLoading, isError, data, isSuccess }] = usePurchaseMutation()
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [showAddress, setShowAddress] = useState(0)
  const [nome, setNome] = useState('')
  const [endereco, setEndereco] = useState('')
  const [cidade, setCidade] = useState('')
  const [cep, setCep] = useState('')
  const [numero, setNumero] = useState('')
  const [complemento, setComplemento] = useState('')
  const [nomeError, setNomeError] = useState(false)
  const [enderecoError, setEnderecoError] = useState(false)
  const [cidadeError, setCidadeError] = useState(false)
  const [cepError, setCepError] = useState(false)
  const [numeroError, setNumeroError] = useState(false)
  const clearCart = () => {
    dispatch(clear())
   }
  const handleNomeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNome(e.target.value)
  }
  const handleEnderecoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEndereco(e.target.value)
  }
  const handleCidadeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCidade(e.target.value)
  }
  const handleCepChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCep(e.target.value)
  }
  const handleNumeroChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNumero(e.target.value)
  }
  const handleComplementoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComplemento(e.target.value)
  }

  function validateFormAdress() {
    // Variáveis temporárias para armazenar os estados de erro
    let nomeErrorTemp = false
    let enderecoErrorTemp = false
    let cidadeErrorTemp = false
    let cepErrorTemp = false
    let numeroErrorTemp = false

    if (nome.length < 5) {
      nomeErrorTemp = true
    }
    if (endereco.length < 5) {
      enderecoErrorTemp = true
    }
    if (cidade.length < 5) {
      cidadeErrorTemp = true
    }
    if (cep.length !== 8) {
      cepErrorTemp = true
    }
    if (numero.length < 1) {
      numeroErrorTemp = true
    }

    // Atualiza os estados de erro de acordo com as variáveis temporárias
    setNomeError(nomeErrorTemp)
    setEnderecoError(enderecoErrorTemp)
    setCidadeError(cidadeErrorTemp)
    setCepError(cepErrorTemp)
    setNumeroError(numeroErrorTemp)

    // Só navega para o próximo passo se todos os erros estiverem falsos
    if (
      !nomeErrorTemp &&
      !enderecoErrorTemp &&
      !cidadeErrorTemp &&
      !cepErrorTemp &&
      !numeroErrorTemp
    ) {
      setShowAddress(2)
    } else {
      if (nomeErrorTemp) {
        setNome('')
      }
      if (enderecoErrorTemp) {
        setEndereco('')
      }
      if (cidadeErrorTemp) {
        setCidade('')
      }
      if (cepErrorTemp) {
        setCep('')
      }
      if (numeroErrorTemp) {
        setNumero('')
      }
      setShowAddress(1)
    }
  }
  const [nomeCartaoError, setNomeCartaoError] = useState(false)
  const [numeroCartaoError, setNumeroCartaoError] = useState(false)
  const [cvvError, setCvvError] = useState(false)
  const [anoValError, setAnoValError] = useState(false)
  const [mesValError, setMesValError] = useState(false)
  const [nomeCartao, setNomeCartao] = useState('')
  const [numeroCartao, setNumeroCartao] = useState('')
  const [cvv, setCvv] = useState('')
  const [anoVal, setAnoVal] = useState('')
  const [mesVal, setMesVal] = useState('')
  const handleNomeCartaoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNomeCartao(e.target.value)
  }
  const handleNumeroCartaoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNumeroCartao(e.target.value)
  }
  const handleCvvChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCvv(e.target.value)
  }
  const handleAnoValChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAnoVal(e.target.value)
  }
  const handleMesValChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMesVal(e.target.value)
  }

  function validateFormCard() {
    // Variáveis temporárias para armazenar os estados de erro
    let nomeCartaoErrorTemp = false
    let numeroCartaoErrorTemp = false
    let cvvErrorTemp = false
    let anoValErrorTemp = false
    let mesValErrorTemp = false

    if (nomeCartao.length < 5) {
      nomeCartaoErrorTemp = true
    }
    if (numeroCartao.length != 16) {
      numeroCartaoErrorTemp = true
    }
    if (cvv.length != 3) {
      cvvErrorTemp = true
    }
    if (anoVal.length != 4) {
      anoValErrorTemp = true
    }
    if (mesVal.length != 2) {
      mesValErrorTemp = true
    }

    // Atualiza os estados de erro de acordo com as variáveis temporárias
    setNomeCartaoError(nomeCartaoErrorTemp)
    setNumeroCartaoError(numeroCartaoErrorTemp)
    setCvvError(cvvErrorTemp)
    setAnoValError(anoValErrorTemp)
    setMesValError(mesValErrorTemp)

    // Só navega para o próximo passo se todos os erros estiverem falsos
    if (
      !nomeCartaoErrorTemp &&
      !numeroCartaoErrorTemp &&
      !cvvErrorTemp &&
      !anoValErrorTemp &&
      !mesValErrorTemp
    ) {
      purchase({
        products: [{ id: 1, price: 10 }],
        delivery: {
          receiver: nome,
          address: {
            // Corrigido de 'newAdress' para 'address'
            description: endereco,
            city: cidade,
            zipCode: cep,
            number: parseInt(numero, 10), // Certifique-se de que número é um número
            complement: complemento
          }
        },
        payment: {
          card: {
            // Certifique-se de que 'card' é um objeto dentro de 'payment'
            name: nomeCartao,
            number: numeroCartao,
            code: parseInt(cvv, 10), // Certifique-se de que o código é um número
            expires: {
              month: parseInt(mesVal, 10), // Certifique-se de que mês é um número
              year: parseInt(anoVal, 10) // Certifique-se de que ano é um número
            }
          }
        }
      })
      clearCart()
      setShowAddress(3)
    } else {
      if (nomeCartaoErrorTemp) {
        setNomeCartao('')
      }
      if (numeroCartaoErrorTemp) {
        setNumeroCartao('')
      }
      if (cvvErrorTemp) {
        setCvv('')
      }
      if (anoValErrorTemp) {
        setAnoVal('')
      }
      if (mesValErrorTemp) {
        setMesVal('')
      }
      setShowAddress(2)
    }
  }

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
  const goToCart = () => {
    setShowAddress(0)
  }
  const goToAddress = () => {
    setShowAddress(1)
  }
  const reset = () => {
    setShowAddress(0)
    closeCart()
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
          <Button type="button" onClick={goToAddress}>
            Continuar com a entrega
          </Button>
        </Sidebar>
      </CartContainer>
    )
  } else if (showAddress === 1) {
    if(items.length==0){
      setShowAddress(0)
      closeCart()
    }
    return (
      <CartContainer className={isOpen ? 'is-open' : ''}>
        <Overlay onClick={reset} />
        <Sidebar>
          <Title2>Entrega</Title2>
          <Label_Text htmlFor="nome">Quem irá receber</Label_Text>
          <WhiteSpace
            value={nome}
            name="nome"
            id="nome"
            onChange={handleNomeChange}
            placeholder={
              nomeError ? 'O campo deve ter no mínimo 5 caracteres' : ''
            }
          ></WhiteSpace>
          <Label_Text htmlFor="endereco">Endereço</Label_Text>
          <WhiteSpace
            value={endereco}
            type="text"
            id="endereco"
            onChange={handleEnderecoChange}
            placeholder={
              enderecoError ? 'O campo deve ter no mínimo 5 caracteres' : ''
            }
          ></WhiteSpace>
          <Label_Text htmlFor="cidade">Cidade</Label_Text>
          <WhiteSpace
            value={cidade}
            type="text"
            id="cidade"
            onChange={handleCidadeChange}
            placeholder={
              cidadeError ? 'O campo deve ter no mínimo 5 caracteres' : ''
            }
          ></WhiteSpace>
          <div style={{ display: 'flex' }}>
            <div>
              <Label_Text htmlFor="cep">CEP</Label_Text>
              <WhiteSpace
                style={{ width: '155px' }}
                type="text"
                value={cep}
                id="cep"
                onChange={handleCepChange}
                placeholder={cepError ? 'Digite um CEP válido' : ''}
              ></WhiteSpace>
            </div>
            <div style={{ float: 'right', marginLeft: '34px' }}>
              <Label_Text htmlFor="numero">Número</Label_Text>
              <WhiteSpace
                value={numero}
                style={{ width: '155px', display: 'flex' }}
                type="text"
                id="numero"
                onChange={handleNumeroChange}
                placeholder={numeroError ? 'O campo é obrigatório' : ''}
              ></WhiteSpace>
            </div>
          </div>
          <Label_Text htmlFor="complemento">
            Complemento{' ('}opcional{')'}
          </Label_Text>
          <WhiteSpace
            style={{ marginBottom: '0' }}
            type="text"
            id="complemento"
            value={complemento}
            onChange={handleComplementoChange}
          ></WhiteSpace>
          <Button2 onClick={validateFormAdress} style={{ marginTop: '24px' }}>
            Continuar com o pagamento
          </Button2>
          <Button2 type="button" onClick={goToCart}>
            Voltar para o carrinho
          </Button2>
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
          <Label_Text htmlFor="nomecartao">Nome no cartão</Label_Text>
          <WhiteSpace
            id="nomecartao"
            type="text"
            name="nomecartao"
            value={nomeCartao}
            onChange={handleNomeCartaoChange}
            placeholder={
              nomeCartaoError ? 'O campo deve ter no mínimo 5 caracteres' : ''
            }
          ></WhiteSpace>
          <div style={{ display: 'flex' }}>
            <div>
              <Label_Text htmlFor="numerocartao">Número no cartão</Label_Text>
              <WhiteSpace
                id="numerocartao"
                style={{ width: '228px' }}
                type="text"
                name="numerocartao"
                value={numeroCartao}
                onChange={handleNumeroCartaoChange}
                placeholder={
                  numeroCartaoError ? 'O campo de ter 16 números' : ''
                }
              ></WhiteSpace>
            </div>
            <div style={{ float: 'right' }}>
              <Label_Text htmlFor="cvv">CVV</Label_Text>
              <WhiteSpace
                id="cvv"
                style={{ width: '87px', display: 'flex' }}
                type="text"
                name="cvv"
                value={cvv}
                onChange={handleCvvChange}
                placeholder={cvvError ? 'cvv inválido' : ''}
              ></WhiteSpace>
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div>
              <Label_Text htmlFor="mesvenc">Mês de Vencimento</Label_Text>
              <WhiteSpace
                id="mesvenc"
                style={{ width: '155px' }}
                type="text"
                name="mesvenc"
                value={mesVal}
                onChange={handleMesValChange}
                placeholder={mesValError ? 'mês inválido' : ''}
              ></WhiteSpace>
            </div>
            <div style={{ float: 'right', marginLeft: '34px' }}>
              <Label_Text htmlFor="anovenc">Ano de Vencimento</Label_Text>
              <WhiteSpace
                className="numeric-input"
                id="anovenc"
                style={{ width: '155px', display: 'flex' }}
                type="text"
                name="anovenc"
                value={anoVal}
                onChange={handleAnoValChange}
                placeholder={anoValError ? 'ano inválido' : ''}
              ></WhiteSpace>
            </div>
          </div>
          <Button2
            type="submit"
            onClick={validateFormCard}
            style={{ marginTop: '24px' }}
          >
            Finalizar pagamento
          </Button2>
          <Button2 type="button" onClick={goToAddress}>
            Voltar para a edição de endereço
          </Button2>
        </Sidebar>
      </CartContainer>
    )
  } else if (showAddress === 3 && isSuccess) {
    return (
      <CartContainer className={isOpen ? 'is-open' : ''}>
        <Overlay onClick={reset} />
        <Sidebar>
          <Title2>Pedido Realizado - {data.orderId}</Title2>
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
          <Button2 type="button" onClick={reset}>
            Concluir
          </Button2>
        </Sidebar>
      </CartContainer>
    )
  } else {
    return <></>
  }
}

export default Cart
