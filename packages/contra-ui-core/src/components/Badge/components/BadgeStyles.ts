import { css } from 'styled-components'
import { DefaultTheme as theme } from '~/core/theme'
// import { variant } from 'styled-system'

import { BadgeBaseProps } from './BadgeTypes'

// const badgeAppearance = {
//   blue: {
//     backgroundColor: 'blue01',
//   },
//   pink: {
//     backgroundColor: 'pink01',
//   },
//   yellow: {
//     backgroundColor: 'yellow01',
//   },
//   green: {
//     backgroundColor: 'green01',
//   },
//   red: {
//     backgroundColor: 'red01',
//   },
// }

const DisabledStyled = css`
  opacity: 0.6;
  filter: saturate(60%);
`

export const BadgeBaseStyle = (props: BadgeBaseProps) =>
  css`
    background-color: ${(props: BadgeBaseProps) =>
      props.appearance ? theme.colors[props.appearance + '01'] : 'white'};
    padding: 10px;
    font-family: ${theme.fonts.title};
    font-weight: ${theme.fontWeights.bold};
    font-size: ${theme.fontSizes[12]};
    text-decoration: none;
    box-sizing: border-box;
    display: inline-block;
    text-align: center;
    position: relative;
    border: ${theme.borders.md};
    border-radius: ${theme.radii.round};

    &:hover:not(:disabled),
    &:active:not(:disabled),
    &:focus {
      outline: 0;
      cursor: pointer;
    }

    ${props.disabled && DisabledStyled}
  `

// export const BadgeBaseStyle = (props: BadgeBaseProps): =>
//   css({
//     bg: `${props.appearance + '01' || 'white'}`,
//     p: 'sm',
//     fontFamily: 'body',
//     fontWeight: 'bold',
//     fontSize: '12',
//     textDecoration: 'none',
//     boxSizing: 'border-box',
//     display: 'inline-block',
//     textAlign: 'center',
//     position: 'relative',
//     borderRadius: 'round',

//     '&:hover:not(:disabled), &:active:not(:disabled), &:focus': {
//       outline: 0,
//       borderColor: 'accent',
//       backgroundColor: 'accent',
//       cursor: 'pointer',
//     },

//     '&:disabled': {
//       opacity: 0.6,
//       filter: 'saturate(60%)',
//     },
//   })
