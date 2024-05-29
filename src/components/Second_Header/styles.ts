import styled from 'styled-components'
import fundo2 from '../../assets/images/fundo2.png'
export const Header_Perfil = styled.header`
  background-image: url(${fundo2});
  background-size: cover;
  height: 163px;
  width: 100vw;
  display: flex;
  text-align: center;
  position: relative;
  align-items: center;
  justify-content:center;
`
export const Image = styled.img`
  margin-top: 0;
  height: 280px;
  width: 100vw;
  margin-bottom:52px;
`
export const DivItens = styled.div`
position:relative;
display:flex;
justify-content:center;
`

export const Box = styled.div`
position:absolute;
width:1024px;
`
export const Box1 = styled(Box)`
height:280px;
`
export const Box2 = styled(Box)`
height:180px;
display:flex;
justify-content:flex-end;
align-items:center;
padding:0;
`