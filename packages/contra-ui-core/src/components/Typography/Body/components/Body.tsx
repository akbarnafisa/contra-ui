import React from 'react'
import styled from 'styled-components'
import {
  variant,
  color,
  space,
  typography,
  layout,
  ColorProps,
  SpaceProps,
  TypographyProps,
  LayoutProps,
} from 'styled-system'

const baseVariants = {
  fontFamily: 'body',
  color: 'grey09',
  fontWeight: 'medium',
  lineHeight: 'body',
}

const variants = {
  21: {
    ...baseVariants,
    fontSize: '21',
  },
  17: {
    ...baseVariants,
    fontSize: '17',
  },
  15: {
    ...baseVariants,
    fontSize: '15',
  },
  12: {
    ...baseVariants,
    fontSize: '12',
  },
}

export type StyledSystemProps = SpaceProps &
  ColorProps &
  LayoutProps &
  TypographyProps

export interface BodyBaseProps extends StyledSystemProps {
  className?: string
  style?: React.CSSProperties
  level?: '21' | '17' | '15' | '12'
}

const Body = styled('p')<BodyBaseProps>(
  {
    margin: 0,
  },
  variant({
    variants,
    prop: 'level',
  }),
  color,
  space,
  typography,
  layout
)

export default Body
