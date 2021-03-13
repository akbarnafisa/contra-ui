/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react'
import { action } from '@storybook/addon-actions'

import Box from './Box'
import { Title } from '~/components/Typography'

export default {
  title: 'Core/Layout',
  component: Box,
}

export const BoxLayout = () => (
  <Box
    onClick={action('on-click')}
    p="md"
    bg="pink03"
    border="md"
    borderRadius="md"
  >
    <Title level="17" color="black">
      Almost before we knew it, we had left the ground.
    </Title>
  </Box>
)
