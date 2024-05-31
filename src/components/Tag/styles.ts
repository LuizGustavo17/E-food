import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.red};
  color: ${cores.primarypink};
  font-size: 14px;
  font-weight: bold;
  padding: 6px 4px;
  display: inline-block;
  margin-right: 8px;
  margin-top: 8px;
`
