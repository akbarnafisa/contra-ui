/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { action } from '@storybook/addon-actions'
import { Story } from '@storybook/react'

import Button from './Button'
import { ButtonBaseProps } from './ButtonTypes'

import { Box } from '~/components/Box'
import { Stack } from '~/components/Layout'

export default {
  title: 'Component/Button/Button',
  component: Button,
}

export const Appearance = () => (
  <Stack gap="md">
    <Box>
      <Button variant="primary">Button Text</Button>
    </Box>
    <Box>
      <Button variant="secondary">Button Text</Button>
    </Box>
    <Box>
      <Button variant="teritary">Button Text</Button>
    </Box>
    <Box>
      <Button variant="destructive">Button Text</Button>
    </Box>
  </Stack>
)

export const Size = () => (
  <Stack gap="md">
    <Box>
      <Button size="small" variant="primary">
        Button Text
      </Button>
    </Box>
    <Box>
      <Button size="small" variant="secondary">
        Button Text
      </Button>
    </Box>
    <Box>
      <Button size="small" variant="teritary">
        Button Text
      </Button>
    </Box>
    <Box>
      <Button size="small" variant="destructive">
        Button Text
      </Button>
    </Box>
  </Stack>
)

export const PlayGround: Story<ButtonBaseProps> = args => (
  <Button onClick={action('button-click')} {...args} />
)

PlayGround.args = {
  size: 'medium',
  variant: 'primary',
  children: 'Button Text',
}
