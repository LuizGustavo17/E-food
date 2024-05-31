import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.white};
  width: 472px;
  height: 398px;
`

export const Titulo = styled.h3`
  position: absolute;
  font-weight: 700;
  font-size: 18px;
  display: block;
  top: 8px;
  bottom: 16px;
  margin-left: 7px;
`

export const Descricao = styled.p`
  font-size: 14px;
  max-width: 456px;
  font-weight: 400;
  line-height: 22px;
  display: block;
  padding-top: 45px;
  margin-bottom: 16px;
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
  top: 8px;
  right: 8px;
  background-color: rgba(0, 0, 0, 0);
`

export const Estrela = styled(Titulo)`
  position: absolute;
  right: 8px;
`

export const Div_Border = styled.div`
  position: relative;
  height: 181px;
  border-right: 1px solid ${cores.red};
  border-bottom: 1px solid ${cores.red};
  border-left: 1px solid ${cores.red};
`

export const Button = styled.button`
  position: absolute;
  background-color: ${cores.red};
  color: ${cores.primarypink};
  height: 24px;
  width: 82px;
  border: none;
  left: 8px;
  top: 149px;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
`
