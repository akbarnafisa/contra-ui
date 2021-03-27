import styled from 'styled-components'
import { allSystemProps, shouldForwardProp } from '~/utils/props'

import { BoxSystemProps } from './BoxTypes'

export interface BoxProps extends BoxSystemProps {}

const Box = styled('div').withConfig<BoxProps>({ shouldForwardProp })(
  {
    boxSizing: 'border-box',
  },
  allSystemProps
)

export default Box
