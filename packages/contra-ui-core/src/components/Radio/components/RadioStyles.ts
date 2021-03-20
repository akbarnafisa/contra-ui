import css, { CssFunctionReturnType } from '@styled-system/css'

export const RadioWrapperStyle = (): CssFunctionReturnType =>
  css({
    display: 'inline-flex',
    alignItems: 'center',
  })

export const RadioInputStyle = (): CssFunctionReturnType =>
  css({
    opacity: 0,
    position: 'absolute',
    left: '-99999px',

    ' + div:after': {
      content: 'none',
    },

    '&:checked + div:after': {
      content: '""',
      bg: 'yellow05',
      border: 'md',
    },

    '&:checked + div:before': {
      content: '""',
      bg: 'white',
    },

    '&:disabled + div:before': {
      opacity: 0.3,
    },
  })

export const RadioDotStyle = (): CssFunctionReturnType =>
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
      borderRadius: '100%',
      left: 0,
      top: 0,
      minHeight: '28px',
      minWidth: '28px',
      bg: 'blue01',
    },

    '&:after': {
      borderRadius: 'round',
      left: '8px',
      top: '8px',
      minHeight: '12px',
      minWidth: '12px',
    },
  })
