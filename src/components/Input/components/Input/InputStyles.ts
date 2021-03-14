import css, { CssFunctionReturnType } from '@styled-system/css'
import { InputWrapperTypes } from './InputTypes'

export const InputWrapperStyle = (
  props: InputWrapperTypes
): CssFunctionReturnType =>
  css({
    border: 'md',
    borderColor: `${props.isError ? 'red05' : 'black'}`,
    backgroundColor: `${props.disabled ? 'grey01' : 'white'}`,
    borderRadius: 'xl',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
    alignItems: 'Center',
  })

export const InputStyle = (): CssFunctionReturnType =>
  css({
    padding: '12px 16px',
    color: 'black',
    fontWeight: 'normal',
    fontSize: '21px',
    fontFamily: 'body',
    lineHeight: '1.25',
    flex: '1',
    border: 'transparent',
    resize: 'none',
    transition: 'border 0.1s linear',
    width: '100%',

    '&:focus': {
      outline: 'none',
      boxShadow: 'none',
    },
  })
