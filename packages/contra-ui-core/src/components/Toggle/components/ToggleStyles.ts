import css, { CssFunctionReturnType } from '@styled-system/css'
import BorderMixins from '~/utils/styles/BorderMixins'

export const ToggleWrapperStyle = (): CssFunctionReturnType =>
  css({
    position: 'relative',
    display: 'block',
    width: '60px',
    height: '36px',
  })

export const ToggleInputStyle = (): CssFunctionReturnType =>
  css({
    display: 'none',

    '&:disabled + div, &:disabled + div + div': {
      borderColor: 'grey06',
      '&:after': {
        borderColor: 'grey06',
      },
    },

    '&:disabled + div': {
      '&:after': {
        borderColor: 'grey06',
      },
    },

    '&:checked + div': {
      transform: 'translateX(24px)',
    },

    '&:checked + div + div': {
      bg: 'yellow03',
    },
  })

export const ToggleSwitchStyle = (): CssFunctionReturnType =>
  css({
    position: 'absolute',
    height: '32px',
    width: '32px',
    left: 0,
    bottom: 0,
    backgroundColor: 'white',
    transition: 'all 0.3s',
    borderRadius: 'round',
    border: 'md',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '&:after': {
      content: '""',
      width: '12px',
      height: '12px',
      border: 'md',
      borderRadius: 'round',
      position: 'relative',
      zIndex: 2,
    },
  })

export const ToggleSwitchInnerStyle = (): CssFunctionReturnType =>
  css({
    width: 'calc(100% - 2px)',
    height: 'calc(100% - 2px)',
    bg: 'blue01',
    transition: 'all 0.3s',
    borderRadius: '34px',
    // border: 'md',
    ...BorderMixins('md', '34px'),
  })
