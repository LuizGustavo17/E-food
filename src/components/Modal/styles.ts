import styled from 'styled-components'
import { cores } from '../../styles'
export const Banner_Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8); /* Fundo escurecido */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

export const Banner_Details = styled.div`
  background-color: ${cores.red};
  width: 1024px;
  height: 344px;
  position: relative;
`
export const Close_Button = styled.img`
  position: absolute;
  width: 16px;
  height: 16px;
  margin-top: 8px;
  margin-left: 1000px;
  cursor: pointer;
`

export const Img = styled.img`
  margin: 32px;
  width: 280px;
  height: 280px;
  object-fit: cover;
`
export const Modal_Title = styled.h3`
  position: absolute;
  top: 32px;
  left: 344px;
  font-weight: 900px;
  font-size: 18px;
  text-align: center;
  color: ${cores.white};
`
export const Modal_Details = styled.p`
  position: absolute;
  top: 63px;
  font-weight: 400px;
  font-size: 14px;
  left: 344px;
  line-height: 22px;
  color: ${cores.white};
  padding-right: 32px;
`
export const Modal_Persons = styled.p`
  position: absolute;
  top: 220px;
  font-weight: 400px;
  font-size: 14px;
  left: 344px;
  line-height: 22px;
  color: ${cores.white};
`
export const Add_to_Cart = styled.button`
  position: absolute;
  width: 218px;
  height: 24px;
  top: 260px;
  border: none;
  background-color: ${cores.primarypink};
  color: ${cores.red};
  cursor: pointer;
`
