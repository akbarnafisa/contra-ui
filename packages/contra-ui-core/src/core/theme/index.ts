import colors from './colors'
import border from './border'
import space from './space'
import typography from './typography'
import shadows from './shadows'
import breakpoints from './breakpoints'

export const DefaultTheme = {
  colors,
  space,
  shadows,
  breakpoints,
  ...border,
  ...typography,
}

export type Theme = typeof DefaultTheme
export type Space = keyof Theme['space']
