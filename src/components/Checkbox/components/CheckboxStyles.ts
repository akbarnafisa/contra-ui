import css, { CssFunctionReturnType } from '@styled-system/css'

export const CheckboxWrapperStyle = (): CssFunctionReturnType =>
  css({
    display: 'inline-flex',
    alignItems: 'center',
  })

export const CheckboxInputStyle = (): CssFunctionReturnType =>
  css({
    opacity: 0,
    position: 'absolute',
    left: '-99999px',

    ' + div:after': {
      content: 'none',
    },

    '&:checked + div:after': {
      content: '""',
    },

    '&:checked + div:before': {
      content: '""',
      bg: 'yellow05',
    },

    '&:disabled + div:before, &:disabled + div:after': {
      opacity: 0.3,
    },
  })

export const CheckboxDotStyle = (): CssFunctionReturnType =>
  css({
    position: 'relative',
    display: 'inline-block',
    minHeight: '32px',
    minWidth: '32px',

    '&:before, &:after': {
      position: 'absolute',
      content: '""',
      display: 'inline-block',
    },

    '&:before': {
      border: 'md',
      borderRadius: 'md',
      left: 0,
      top: 0,
      minHeight: '28px',
      minWidth: '28px',
      bg: 'blue01',
    },

    '&:after': {
      borderLeft: '3px solid black',
      borderBottom: '3px solid black',
      transform: 'rotate(-45deg)',
      height: '6px',
      width: '12px',
      left: '9px',
      top: '9px',
    },
  })
