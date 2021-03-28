import React from 'react'
import styled from 'styled-components'
import { commonProps } from '~/utils/props'

import { ButtonBaseProps } from './ButtonTypes'
import { ButtonBaseStyle, ButtonVariants, ButtonSizes } from './ButtonStyles'

export interface ButtonProps
  extends ButtonBaseProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonBase = styled.button<ButtonProps>(
  ButtonBaseStyle,
  ButtonSizes,
  ButtonVariants,
  commonProps
)

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      style,
      children,
      disabled,
      appearance,
      type,
      size,
      block,
      ...rest
    },
    ref
  ) => {
    return (
      <ButtonBase
        className={className}
        style={style}
        disabled={disabled}
        appearance={appearance}
        ref={ref}
        type={type}
        size={size}
        block={block}
        {...rest}
      >
        {children}
      </ButtonBase>
    )
  }
)

Button.defaultProps = {
  appearance: 'primary',
  type: 'button',
  size: 'medium',
}

export default Button
