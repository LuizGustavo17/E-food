import { createGlobalStyle } from 'styled-components'

export const cores = {
  primarypink: '#FFEBD9',
  softwhite: '#FFF8F2',
  red: '#E66767',
  background: '#FFF8F2',
  white: '#FFF'
}

export const GlobalCSS = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
}
body{
    background-color:${cores.softwhite};
    color:${cores.red};
}
`
