import React from 'react'
import styled from 'styled-components'

import { IconButtonBaseProps } from './IconButtonTypes'
import {
  IconButtonBaseStyle,
  IconButtonVariants,
  IconButtonSizes,
} from './IconButtonStyles'

export interface IconButtonProps
  extends IconButtonBaseProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {}

const IconButtonBase = styled.button<IconButtonProps>(
  IconButtonBaseStyle,
  IconButtonSizes,
  IconButtonVariants
)

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    { className, style, children, disabled, variant, type, size, ...rest },
    ref
  ) => {
    return (
      <IconButtonBase
        className={className}
        style={style}
        disabled={disabled}
        variant={variant}
        ref={ref}
        type={type}
        size={size}
        {...rest}
      >
        {children}
      </IconButtonBase>
    )
  }
)

IconButton.defaultProps = {
  size: 'medium',
  type: 'button',
  variant: 'primary',
}

export default IconButton
