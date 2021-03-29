import css, { CssFunctionReturnType } from '@styled-system/css'
import { BadgeBaseProps } from './BadgeTypes'
import BorderMixins from '~/utils/styles/BorderMixins'

export const BadgeBaseStyle = (props: BadgeBaseProps): CssFunctionReturnType =>
  css({
    bg: `${props.appearance + '01' || 'white'}`,
    p: 'sm',
    fontFamily: 'body',
    fontWeight: 'bold',
    fontSize: '12',
    textDecoration: 'none',
    boxSizing: 'border-box',
    display: 'inline-block',
    textAlign: 'center',
    position: 'relative',
    borderRadius: 'round',
    ...BorderMixins('md', 'round'),

    '&:hover:not(:disabled), &:active:not(:disabled), &:focus': {
      outline: 0,
      borderColor: 'accent',
      backgroundColor: 'accent',
      cursor: 'pointer',
    },

    '&:disabled': {
      opacity: 0.6,
      filter: 'saturate(60%)',
    },
  })
