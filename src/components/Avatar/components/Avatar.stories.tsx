/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { action } from '@storybook/addon-actions'
import { Story } from '@storybook/react'

import Avatar from './Avatar'
import { AvatarBaseProps } from './AvatarTypes'

export default {
  title: 'Component/Avatar',
  component: Avatar,
}

export const Example: Story<AvatarBaseProps> = args => (
  <Avatar onClick={action('button-click')} {...args} />
)

Example.args = {
  size: '48',
  appearance: 'yellow',
}
