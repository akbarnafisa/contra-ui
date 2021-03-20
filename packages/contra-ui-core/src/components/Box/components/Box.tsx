import styled from 'styled-components'
import {
  space,
  color,
  border,
  layout,
  flexbox,
  shadow,
  position,
  grid,
} from 'styled-system'
import shouldForwardProp from '@styled-system/should-forward-prop'
import { BoxSystemProps } from './BoxTypes'

const Box = styled('div').withConfig<BoxSystemProps>({ shouldForwardProp })(
  {
    boxSizing: 'border-box',
  },
  space,
  color,
  border,
  layout,
  flexbox,
  shadow,
  position,
  grid
)

export default Box
