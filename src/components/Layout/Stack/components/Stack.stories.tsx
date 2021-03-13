import React from 'react'

import Stack from './Stack'
import { Box } from '~/components/Box'
import { Body } from '~/components/Typography'

export default {
  title: 'Core/Layout',
  component: Stack
}

export const StackLayout = () => (
  <Stack gap="md">
    <Box>
      <Body level="15">Almost before we knew it, we had left the ground.</Body>
    </Box>
    <Box>
      <Body level="15">Almost before we knew it, we had left the ground.</Body>
    </Box>
    <Box>
      <Body level="15">Almost before we knew it, we had left the ground.</Body>
    </Box>
  </Stack>
)
