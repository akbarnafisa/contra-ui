import css, { CssFunctionReturnType } from '@styled-system/css'
import { AvatarBaseProps } from './AvatarTypes'
import BorderMixins from '~/utils/styles/BorderMixins'

export const AvatarBaseStyle = (
  props: AvatarBaseProps
): CssFunctionReturnType =>
  css({
    width: `${props.size}px`,
    height: `${props.size}px`,
    borderRadius: '50%',
    lineHeight: 1,
    verticalAlign: 'middle',
    overflow: 'hidden',
    userSelect: 'none',
    backgroundColor: `${props.appearance}03`,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    ...BorderMixins('md', 'round'),

    img: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
    },
  })
