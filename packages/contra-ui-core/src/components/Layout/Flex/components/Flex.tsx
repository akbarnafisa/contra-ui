import styled from 'styled-components'
import { variant } from 'styled-system'
import { Box } from '~/components/Box'

export interface FlexProps {
  variant?: 'center'
}
const Flex = styled(Box)<FlexProps>(
  {
    display: 'flex',
  },
  variant({
    variants: {
      center: {
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
  })
)

export default Flex
