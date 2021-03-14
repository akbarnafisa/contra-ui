/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { Story } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Radio from './Radio'
import { RadioBaseProps } from './RadioTypes'

import { Title } from '../../Typography'
import { Box } from '../../Box'

export default {
  title: 'Component/Radio',
  component: Radio,
  argTypes: {
    disabled: {
      table: {
        disable: true,
      },
    },
  },
}

export const Example: Story<RadioBaseProps> = () => (
  <>
    <Box mb="xs">
      <Radio
        id="cheese"
        onChange={action('on-change')}
        name="item"
        value="cheese"
      >
        <Title level="17" ml="md">
          Cheese
        </Title>
      </Radio>
    </Box>

    <Box mb="xs">
      <Radio id="loaf" onChange={action('on-change')} name="item" value="loaf">
        <Title level="17" ml="md">
          Loaf
        </Title>
      </Radio>
    </Box>

    <Box mb="xs">
      <Radio
        id="milk"
        onChange={action('on-change')}
        name="item"
        value="milk"
        disabled
      >
        <Title level="17" ml="md">
          Milk
        </Title>
      </Radio>
    </Box>
  </>
)
