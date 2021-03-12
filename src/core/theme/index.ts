import colors from './colors'
import border from './border'
import space from './space'
import typography from './typography'
import shadows from './shadows'

export const DefaultTheme = {
  colors,
  space,
  shadows,
  ...border,
  ...typography
}

export type Theme = typeof DefaultTheme
export type Space = keyof Theme['space']
