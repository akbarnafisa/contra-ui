import React from 'react'
import styled from 'styled-components'
import { Box } from '~/components/Box'

import { CheckboxBaseProps } from './CheckboxTypes'
import {
  CheckboxDotStyle,
  CheckboxInputStyle,
  CheckboxWrapperStyle,
} from './CheckboxStyles'

export interface CheckboxProps
  extends CheckboxBaseProps,
    React.InputHTMLAttributes<HTMLInputElement> {}

const CheckboxDot = styled.div(CheckboxDotStyle)
const CheckboxInput = styled.input<CheckboxProps>(CheckboxInputStyle)
const CheckboxWrapper = styled(Box)(CheckboxWrapperStyle)

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, className, style, disabled, children, name, ...rest }, ref) => {
    return (
      <CheckboxWrapper
        as="label"
        htmlFor={id}
        className={className}
        style={style}
      >
        <CheckboxInput
          id={id}
          disabled={disabled}
          type="checkbox"
          ref={ref}
          name={name}
          {...rest}
        />
        <CheckboxDot />
        {children}
      </CheckboxWrapper>
    )
  }
)

Checkbox.displayName = 'Checkbox'

export default Checkbox
