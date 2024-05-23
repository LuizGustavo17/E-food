import styled from 'styled-components'
import fundo from '../../assets/images/fundo.png'

export const HeaderBar = styled.header`
  background-image: url(${fundo});
  background-size: cover;
  height: 384px;
  width: 100vw;
  display: block;
  text-align: center;
  align-items: center;
`
export const Logotipo = styled.img`
  width: 125px;
  height: 57.5px;
  margin-top: 40px;
`
