import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  width: 100vw;
  height: 298px;
  background-color: ${cores.primarypink};
  display: flex;
  justify-content: center;
  margin-top: 120px;
  position: relative;
`

export const Container_Svg = styled.div`
  display: flex;
  position: absolute;
  top: 130px;
  left: calc(50vw-44px);
`
export const P_footer = styled.p`
  position: absolute;
  max-width: 480px;
  height: 24px;
  font-weight: 400;
  font-size: 10px;
  color: ${cores.red};
  text-align: center;
  top: 234px;
`
