import styled from 'styled-components'
import { cores } from '../../styles'

export const Title2 = styled.h3`
  color: ${cores.primarypink};
  font-weight: 700px;
  font-size: 16px;
  margin-bottom: 16px;
  line-height: 18.75px;
`
export const Label_Text = styled.label`
  color: ${cores.primarypink};
  font-weight: 700px;
  font-size: 14px;
`
export const WhiteSpace = styled.input`
width:344px;
height:32px;
background-color:${cores.primarypink};
border:none;
margin-top:8px;
margin-bottom:8px;
::placeholder{
    color:${cores.placeholder}
    font-weight:700px;
    font-size:14px;
}
`
export const Pdonne = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: ${cores.primarypink};
  max-width: 344px;
  margin-bottom: 24px;
`
export const Button2 = styled.button`
  width: 344px;
  height: 32px;
  background-color: ${cores.primarypink};
  border: none;
  margin-right: 8px;
  margin-bottom: 8px;
  font-weight: 700;
  text-align: center;
  font-size: 14px;
  line-height: 16.41px;
  color: ${cores.red};
  cursor: pointer;
`
