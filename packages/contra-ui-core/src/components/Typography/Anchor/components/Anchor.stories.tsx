import React from 'react'
import Anchor from './Anchor'
import { Box } from '../../../Box'

export default {
  title: 'Core/Typography',
  component: Anchor,
}

export const AnchorTypography = () => (
  <>
    <Box>
      <Anchor level="21" href="https://google.com" target="_blank">
        Almost before we knew it, we had left the ground
      </Anchor>
    </Box>
    <Box>
      <Anchor level="17" href="https://google.com" target="_blank">
        Almost before we knew it, we had left the ground
      </Anchor>
    </Box>
    <Box>
      <Anchor level="15" href="https://google.com" target="_blank">
        Almost before we knew it, we had left the ground
      </Anchor>
    </Box>
    <Box>
      <Anchor level="12" href="https://google.com" target="_blank">
        Almost before we knew it, we had left the ground
      </Anchor>
    </Box>
  </>
)
