import styled from 'styled-components'
import { allSystemProps, shouldForwardProp } from '~/utils/props'

import { BoxSystemProps } from './BoxTypes'

const Box = styled('div').withConfig<BoxSystemProps>({ shouldForwardProp })(
  {
    boxSizing: 'border-box',
  },
  allSystemProps
)

export default Box
