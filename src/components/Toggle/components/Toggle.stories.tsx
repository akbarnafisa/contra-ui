/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { action } from '@storybook/addon-actions'
import { Story } from '@storybook/react'

import Toggle from './Toggle'
import { ToggleBaseProps } from './ToggleTypes'

export default {
  title: 'Component/Toggle',
  component: Toggle,
}

export const Example: Story<ToggleBaseProps> = args => (
  <Toggle id="toggle" onChange={action('on-change')} {...args} />
)
