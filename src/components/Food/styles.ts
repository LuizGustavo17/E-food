import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  width: 320px;
  height: 338px;
  background-color: ${cores.red};
`
export const Img = styled.img`
  width: 304px;
  height: 167px;
  margin-right: 8px;
  margin-left: 8px;
  margin-top: 8px;
  margin-bottom: -3px;
`
export const Title = styled.h3`
  font-weight: 900;
  line-height: 18.75px;
  font-size: 16px;
  color: ${cores.primarypink};
  margin-left: 8px;
  margin-top: 8px;
`
export const Description = styled.p`
  line-height: 22px;
  font-weight: 400;
  font-size: 14px;
  margin: 8px;
  color: ${cores.primarypink};
`
export const Button = styled.button`
  border: none;
  background-color: ${cores.primarypink};
  color: ${cores.red};
  width: 304px;
  height: 24px;
  margin-left: 8px;
  cursor: pointer;
`
