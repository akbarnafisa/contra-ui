/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { action } from '@storybook/addon-actions'
import { Story } from '@storybook/react'

import Badge from './Badge'
import { BadgeBaseProps } from './BadgeTypes'

export default {
  title: 'Component/Badge',
  component: Badge,
}

export const Default = () => <Badge> Badge Text </Badge>

export const Appearance = () => (
  <>
    <Badge mr="xs">Badge Text</Badge>
    <Badge mr="xs" appearance="pink">
      Badge Text
    </Badge>
    <Badge mr="xs" appearance="red">
      Badge Text
    </Badge>
    <Badge mr="xs" appearance="yellow">
      Badge Text
    </Badge>
  </>
)

export const PlayGround: Story<BadgeBaseProps> = args => (
  <Badge onClick={action('button-click')} {...args} />
)

PlayGround.args = {
  children: 'Badge Text',
}

PlayGround.argTypes = {
  appearance: {
    control: {
      type: 'select',
      options: ['green', 'pink', 'red', 'yellow'],
    },
    defaultValue: 'green',
  },
}
