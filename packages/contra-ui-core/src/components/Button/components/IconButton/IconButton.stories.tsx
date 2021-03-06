/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { action } from '@storybook/addon-actions'
import { Story } from '@storybook/react'

import IconButton from './IconButton'
import { IconButtonBaseProps } from './IconButtonTypes'

import { Box } from '~/components/Box'
import { Stack } from '~/components/Layout'

import { IconCross } from '~/components/Icon'
import { DefaultTheme as theme } from '~/core/theme'

export default {
  title: 'Component/Button/IconButton',
  component: IconButton,
}

export const Appearance = () => (
  <Stack gap="md">
    <Box>
      <IconButton appearance="primary">
        <IconCross color="white" />
      </IconButton>
    </Box>
    <Box>
      <IconButton appearance="secondary">
        <IconCross color="white" />
      </IconButton>
    </Box>
    <Box>
      <IconButton appearance="teritary">
        <IconCross />
      </IconButton>
    </Box>
    <Box>
      <IconButton appearance="destructive">
        <IconCross color={theme.colors.red05} />
      </IconButton>
    </Box>
  </Stack>
)

export const Size = () => (
  <Stack gap="md">
    <Box>
      <IconButton size="small" appearance="teritary">
        <IconCross size="18" />
      </IconButton>
    </Box>
    <Box>
      <IconButton size="medium" appearance="teritary">
        <IconCross />
      </IconButton>
    </Box>
    <Box>
      <IconButton size="large" appearance="teritary">
        <IconCross size="32" />
      </IconButton>
    </Box>
  </Stack>
)

export const PlayGround: Story<IconButtonBaseProps> = args => (
  <IconButton onClick={action('button-click')} {...args} />
)

PlayGround.args = {
  size: 'medium',
  appearance: 'primary',
}
