/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { action } from '@storybook/addon-actions'
import { Story } from '@storybook/react'

import Avatar from './Avatar'
import { AvatarBaseProps } from './AvatarTypes'

import { Box } from '~/components/Box'
import { Flex } from '~/components/Layout'

export default {
  title: 'Component/Avatar',
  component: Avatar,
}

export const Appearance = () => (
  <Flex>
    <Box mr="md">
      <Avatar appearance="blue" entityName="John Doe" />
    </Box>
    <Box mr="md">
      <Avatar appearance="green" entityName="John Doe" />
    </Box>
    <Box mr="md">
      <Avatar appearance="pink" entityName="John Doe" />
    </Box>
    <Box mr="md">
      <Avatar appearance="red" entityName="John Doe" />
    </Box>
    <Box mr="md">
      <Avatar appearance="yellow" entityName="John Doe" />
    </Box>
  </Flex>
)

export const Size = () => (
  <Flex>
    <Box mr="md">
      <Avatar size="48" entityName="John Doe" />
    </Box>
    <Box mr="md">
      <Avatar size="54" entityName="John Doe" />
    </Box>
    <Box mr="md">
      <Avatar size="64" entityName="John Doe" />
    </Box>
    <Box mr="md">
      <Avatar size="144" entityName="John Doe" />
    </Box>
  </Flex>
)

export const PlayGround: Story<AvatarBaseProps> = args => (
  <Avatar onClick={action('button-click')} {...args} />
)

PlayGround.args = {
  size: '48',
  appearance: 'yellow',
  entityName: 'John Doe',
}
