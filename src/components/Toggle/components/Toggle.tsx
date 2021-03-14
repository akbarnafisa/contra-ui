import React from 'react'
import styled from 'styled-components'
import { Box } from '../../Box'

import { ToggleBaseProps } from './ToggleTypes'
import {
  ToggleInputStyle,
  ToggleSwitchStyle,
  ToggleSwitchInnerStyle,
  ToggleWrapperStyle,
} from './ToggleStyles'

export interface ToggleProps
  extends ToggleBaseProps,
    React.InputHTMLAttributes<HTMLInputElement> {}

const ToggleWrapper = styled(Box)(ToggleWrapperStyle)
const ToggleInput = styled.input<ToggleProps>(ToggleInputStyle)
const ToggleSwitch = styled.div(ToggleSwitchStyle)
const ToggleSwitchInner = styled.div(ToggleSwitchInnerStyle)

const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
  ({ id, className, style, ...rest }, ref) => {
    return (
      <ToggleWrapper
        as="label"
        htmlFor={id}
        className={className}
        style={style}
      >
        <ToggleInput
          id={id}
          type="checkbox"
          role="switch"
          ref={ref}
          {...rest}
        />
        <ToggleSwitch />
        <ToggleSwitchInner />
      </ToggleWrapper>
    )
  }
)

Toggle.displayName = 'Toggle'

export default Toggle
