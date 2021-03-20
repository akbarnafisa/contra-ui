import React from 'react'
import {
  SpaceProps,
  ColorProps,
  BorderProps,
  LayoutProps,
  FlexboxProps,
  ShadowProps,
  PositionProps,
  GridProps,
} from 'styled-system'

export type StyledSystemProps = SpaceProps &
  ColorProps &
  BorderProps &
  LayoutProps &
  FlexboxProps &
  ShadowProps &
  PositionProps &
  GridProps

export interface BoxSystemProps extends StyledSystemProps {
  className?: string
  style?: React.CSSProperties
  color?: string
}
