/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { Story } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Checkbox from './Checkbox'
import { CheckboxBaseProps } from './CheckboxTypes'

import { Title } from '~/components/Typography'
import { Box } from '~/components/Box'

export default {
  title: 'Component/Checkbox',
  component: Checkbox,
  argTypes: {
    disabled: {
      table: {
        disable: true,
      },
    },
  },
}

export const Example: Story<CheckboxBaseProps> = () => (
  <>
    <Box mb="xs">
      <Checkbox
        id="cheese"
        onChange={action('on-change')}
        name="item"
        value="cheese"
      >
        <Title level="17" ml="md">
          Cheese
        </Title>
      </Checkbox>
    </Box>

    <Box mb="xs">
      <Checkbox
        id="loaf"
        onChange={action('on-change')}
        name="item"
        value="loaf"
      >
        <Title level="17" ml="md">
          Loaf
        </Title>
      </Checkbox>
    </Box>

    <Box mb="xs">
      <Checkbox
        id="milk"
        onChange={action('on-change')}
        name="item"
        value="loaf"
        disabled
        checked
      >
        <Title level="17" ml="md">
          Milk
        </Title>
      </Checkbox>
    </Box>
  </>
)
