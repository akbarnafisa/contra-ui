/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { Story } from '@storybook/react'

import Input from './Input'
import { InputBaseTypes, InputWrapperTypes } from './InputTypes'
import { IconUser } from '~/components/Icon'
import { Box } from '~/components/Box'

type InputTypes = InputBaseTypes & InputWrapperTypes

export default {
  title: 'Component/Input',
  component: Input,
  argTypes: {
    disabled: {
      table: {
        disable: true,
      },
    },
  },
}

export const Example: Story<InputTypes> = args => (
  <Input {...args} placeholder="Email Address">
    <Box ml="md">
      <IconUser />
    </Box>
  </Input>
)
