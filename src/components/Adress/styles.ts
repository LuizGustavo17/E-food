import styled from 'styled-components'
import { cores } from '../../styles'

export const Title2 = styled.h3`
  color: ${cores.primarypink};
  font-weight: 700px;
  font-size: 16px;
  margin-left: 8px;
  margin-top: 32px;
  margin-bottom: 16px;
`
export const Label_Text = styled.label`
  color: ${cores.primarypink};
  font-weight: 700px;
  font-size: 14px;
  margin-left: 8px;
`
export const WhiteSpace = styled.input`
width:326px;
height:32px;
background-color:${cores.primarypink};
border:none;
margin-right:8px;
margin-left: 8px;
margin-top:8px;
margin-bottom:8px;
::placeholder{
    color:${cores.placeholder}
    font-weight:700px;
    font-size:14px;
}
`
export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`

export const WhiteSpaceSmall = styled.input`
height:32px;
width:155px;
background-color:${cores.primarypink};
border:none;
margin-right:8px;
margin-top:8px;
margin-left:8px;
margin-bottom:8px;
width:155px;
::placeholder{
    color:${cores.placeholder}
    font-weight:700px;
    font-size:14px;
}
`
export const Disflex = styled.div`
  display: flex;
`
export const Button2 = styled.button`
  width: 326px;
  height: 32px;
  background-color: ${cores.primarypink};
  border: none;
  margin-right: 8px;
  margin-left: 8px;
  margin-bottom: 8px;
  font-weight: 700;
  text-align: center;
  font-size: 14px;
  color: ${cores.red};
`
