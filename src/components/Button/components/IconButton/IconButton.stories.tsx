/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { action } from '@storybook/addon-actions'
import { Story } from '@storybook/react'

import IconButton from './IconButton'
import { IconButtonBaseProps } from './IconButtonTypes'

import { Box } from '~/components/Box'
import { Stack } from '~/components/Layout'

export default {
  title: 'Component/Button/IconButton',
  component: IconButton,
}

export const Appearance = () => (
  <Stack gap="md">
    <Box>
      <IconButton variant="primary" />
    </Box>
    <Box>
      <IconButton variant="secondary" />
    </Box>
    <Box>
      <IconButton variant="teritary" />
    </Box>
    <Box>
      <IconButton variant="destructive" />
    </Box>
  </Stack>
)

export const Size = () => (
  <Stack gap="md">
    <Box>
      <IconButton size="small" variant="teritary" />
    </Box>
    <Box>
      <IconButton size="medium" variant="teritary" />
    </Box>
    <Box>
      <IconButton size="large" variant="teritary" />
    </Box>
  </Stack>
)

export const PlayGround: Story<IconButtonBaseProps> = args => (
  <IconButton onClick={action('button-click')} {...args} />
)

PlayGround.args = {
  size: 'medium',
  variant: 'primary',
}
