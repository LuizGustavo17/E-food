import styled from 'styled-components'
import { cores } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;
  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.red};
  z-index: 1;
  padding: 32px 8px 0px 8px;
  width: 360px;
`
export const Pvalue = styled.span`
  color: ${cores.primarypink};
  font-weight: 700;
  font-size: 14px;
  text-align: center;
`
export const Pprice = styled(Pvalue)`
  margin-left: 214px;
`
export const Button = styled.button`
  width: 344px;
  height: 24px;
  background-color: ${cores.primarypink};
  color: ${cores.red};
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  border: none;
  cursor: pointer;
  line-height: 16.41px;
  margin-top: 16px;
`
export const CartItem = styled.li`
  position: relative;
  display: flex;
  width: 344px;
  height: 100px;
  margin-bottom: 16px;
  background-color: ${cores.primarypink};
  .myimg {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin: 8px;
  }
  h3 {
    font-weight: 900;
    font-size: 18px;
    margin-left: 8px;
    margin-top: 8px;
    line-height: 21.09px;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    margin-top: 16px;
    margin-left: 8px;
    line-height: 22px;
  }
  #lixeira {
    position: absolute;
    top: 76px;
    left: 320px;
    height: 16px;
    width: 16px;
    cursor: pointer;
  }
`
