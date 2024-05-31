import styled from 'styled-components'
export const Div_Center = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: center; /* Alinha os itens horizontalmente */
  align-items: center;
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto;
  column-gap: 80px;
  row-gap: 48px;
`
