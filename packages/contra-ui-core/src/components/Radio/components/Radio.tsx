import React from 'react'
import styled from 'styled-components'
import { Box } from '../../Box'

import { RadioBaseProps } from './RadioTypes'
import {
  RadioDotStyle,
  RadioInputStyle,
  RadioWrapperStyle,
} from './RadioStyles'

export interface RadioProps
  extends RadioBaseProps,
    React.InputHTMLAttributes<HTMLInputElement> {}

const RadioDot = styled.div(RadioDotStyle)
const RadioInput = styled.input<RadioProps>(RadioInputStyle)
const RadioWrapper = styled(Box)(RadioWrapperStyle)

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ id, className, style, disabled, children, name, ...rest }, ref) => {
    return (
      <RadioWrapper as="label" htmlFor={id} className={className} style={style}>
        <RadioInput
          id={id}
          disabled={disabled}
          type="radio"
          ref={ref}
          name={name}
          {...rest}
        />
        <RadioDot />
        {children}
      </RadioWrapper>
    )
  }
)

Radio.displayName = 'Radio'

export default Radio
