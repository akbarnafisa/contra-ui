import React from 'react'
import styled from 'styled-components'

import { InputBaseTypes, InputWrapperTypes } from './InputTypes'
import { InputStyle, InputWrapperStyle } from './InputStyles'

export interface InputProps
  extends InputBaseTypes,
    InputWrapperTypes,
    React.InputHTMLAttributes<HTMLInputElement> {}

const InputWrapper = styled.label<InputWrapperTypes>(InputWrapperStyle)
const InputElement = styled.input<InputProps>(InputStyle)

const Input: React.FC<InputProps> = ({
  id,
  className,
  style,
  isError,
  disabled,
  children,
  placeholder,
  type = 'text',
  value,
}) => {
  return (
    <InputWrapper
      htmlFor={id}
      className={className}
      style={style}
      isError={isError}
    >
      {children}
      <InputElement
        id={id}
        disabled={disabled}
        placeholder={placeholder}
        type={type}
        value={value}
        style={{
          paddingLeft: children ? '12px' : '16px',
        }}
      />
    </InputWrapper>
  )
}

Input.displayName = 'Input'

export default Input
