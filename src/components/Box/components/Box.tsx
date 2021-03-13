import styled from 'styled-components'
import {
  space,
  color,
  border,
  layout,
  flexbox,
  shadow,
  position,
  grid
} from 'styled-system'
import { BoxSystemProps } from './BoxTypes'
import shouldForwardProp from '@styled-system/should-forward-prop'

const Box = styled('div').withConfig<BoxSystemProps>({ shouldForwardProp })(
  {
    boxSizing: 'border-box'
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
