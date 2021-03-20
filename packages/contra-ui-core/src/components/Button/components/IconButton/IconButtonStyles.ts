import css, { CssFunctionReturnType } from '@styled-system/css'
import { variant } from 'styled-system'
import { DefaultTheme as theme } from '~/core/theme'

import BorderMixins from '~/utils/styles/BorderMixins'

export const IconButtonVariants = (): CssFunctionReturnType =>
  variant({
    variants: {
      primary: {
        bg: 'blue05',
        color: 'white',
      },
      secondary: {
        bg: 'grey09',
        color: 'white',
      },
      teritary: {
        bg: 'white',
        color: 'black',
      },
      destructive: {
        bg: 'white',
        color: 'red05',
        boxShadow: `0 2px 0 ${theme.colors.red05}`,
        ...BorderMixins('2px solid #F95A2C', 'round'),
      },
    },
  })

export const IconButtonSizes = (): CssFunctionReturnType =>
  variant({
    prop: 'size',
    variants: {
      large: {
        width: '60px',
        height: '60px',
        boxShadow: `0 4px 0 ${theme.colors.grey09}`,
        ...BorderMixins('2px solid black', 'round'),
      },
      medium: {
        width: '48px',
        height: '48px',
        boxShadow: `0 3px 0 ${theme.colors.grey09}`,
        ...BorderMixins('2px solid black', 'round'),
      },
      small: {
        width: '32px',
        height: '32px',
        boxShadow: `0 2px 0 ${theme.colors.grey09}`,
        ...BorderMixins('1px solid black', 'round'),
      },
    },
  })

export const IconButtonBaseStyle = (): CssFunctionReturnType =>
  css({
    borderRadius: 'round',
    textDecoration: 'none',
    boxSizing: 'border-box',
    display: 'inline-block',
    transition: 'box-shadow .1s',
    position: 'relative',
    border: 'none',

    '&:hover:not(:disabled), &:active:not(:disabled), &:focus': {
      outline: 0,
      cursor: 'pointer',
    },

    '&:active': {
      boxShadow: `0 1px 0 ${theme.colors.grey09}`,
    },

    '&:disabled': {
      opacity: 0.6,
      filter: 'saturate(60%)',
    },
  })
