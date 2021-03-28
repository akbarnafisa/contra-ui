import css, { CssFunctionReturnType } from '@styled-system/css'
import { variant } from 'styled-system'
import { DefaultTheme as theme } from '~/core/theme'
import BorderMixins from '~/utils/styles/BorderMixins'

import { ButtonBaseProps } from './ButtonTypes'

export const ButtonVariants = (): CssFunctionReturnType =>
  variant({
    prop: 'appearance',
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
        ...BorderMixins('2px solid #F95A2C', 'md'),

        '&:active': {
          boxShadow: `0 1px 0 ${theme.colors.red05}`,
        },
      },
    },
  })

export const ButtonSizes = (): CssFunctionReturnType =>
  variant({
    prop: 'size',
    variants: {
      medium: {
        fontSize: '21',
        height: '60px',
        boxShadow: `0 3px 0 ${theme.colors.grey09}`,
        ...BorderMixins('2px solid black', 'md'),
      },
      small: {
        fontSize: '12',
        py: '10px',
        boxShadow: `0 2px 0 ${theme.colors.grey09}`,
        ...BorderMixins('2px solid black', 'md'),
      },
    },
  })

export const ButtonBaseStyle = (
  props: ButtonBaseProps
): CssFunctionReturnType =>
  css({
    width: `${props.block ? '100%' : 'inherit'}`,
    px: 'md',
    py: 'xs',
    borderRadius: 'md',
    fontFamily: 'body',
    fontWeight: 'bold',
    textDecoration: 'none',
    boxSizing: 'border-box',
    display: 'inline-block',
    textAlign: 'center',
    transition: 'box-shadow .1s',
    border: 'none',
    position: 'relative',

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
