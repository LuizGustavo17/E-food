import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.white};
  max-width: 472px;
`

export const Titulo = styled.h3`
  position: absolute;
  font-weight: 700;
  font-size: 18px;
  display: block;
  top: 8px;
  bottom: 16px;
  margin-left: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  padding-top: 64px;
  margin-bottom: 32px;
  margin-left: 8px;
`
export const Img_Card = styled.img`
  width: 472px;
  height: 217px;
`
export const Div_Img = styled.div`
  position: relative;
  margin-bottom: -4px;
`

export const Div_Tag = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: rgba(0, 0, 0, 0);
  padding: 5px;
`

export const Estrela = styled(Titulo)`
  position: absolute;
  right: 16px;
`

export const Div_Border = styled.div`
  border-right: 1px solid ${cores.red};
  border-bottom: 1px solid ${cores.red};
  border-left: 1px solid ${cores.red};
`

export const Button = styled.button`
  background-color: ${cores.red};
  color: ${cores.primarypink};
  height: 24px;
  width: 82px;
  border: none;
  margin-left: 8px;
  margin-bottom: 8px;
  cursor: pointer;
`
