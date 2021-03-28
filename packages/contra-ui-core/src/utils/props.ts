import {
  layout,
  LayoutProps,
  flexbox,
  FlexboxProps,
  position,
  PositionProps,
  grid,
  GridProps,
  space,
  SpaceProps,
  background,
  BackgroundProps,
  color,
  ColorProps,
  border,
  BorderProps,
  shadow,
  ShadowProps,
  typography,
  TypographyProps,
  compose,
} from 'styled-system'

import {
  createShouldForwardProp,
  props,
} from '@styled-system/should-forward-prop'

export function sfp(p: string[] = []) {
  return createShouldForwardProp([...props, ...p])
}

export const shouldForwardProp = createShouldForwardProp(props)

export type AllSystemProps = LayoutProps &
  FlexboxProps &
  PositionProps &
  GridProps &
  SpaceProps &
  BackgroundProps &
  ColorProps &
  BorderProps &
  ShadowProps &
  TypographyProps

export const allSystemProps = compose(
  layout,
  flexbox,
  position,
  grid,
  space,
  background,
  color,
  border,
  shadow,
  typography
)

export type CommonSystemProps = LayoutProps &
  PositionProps &
  FlexboxProps &
  GridProps &
  SpaceProps &
  BorderProps

export const commonProps = compose(
  layout,
  position,
  flexbox,
  grid,
  space,
  border
)
