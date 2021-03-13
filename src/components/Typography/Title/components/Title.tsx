import React from 'react'
import styled from 'styled-components'
import { variant, space, color, SpaceProps, ColorProps } from 'styled-system'

const baseVariants = {
  fontFamily: 'title',
  color: 'black',
  fontWeight: 'bold',
  lineHeight: 'title'
}

const variants = {
  44: {
    ...baseVariants,
    fontSize: '44'
  },
  36: {
    ...baseVariants,
    fontSize: '36'
  },
  27: {
    ...baseVariants,
    fontSize: '27'
  },
  24: {
    ...baseVariants,
    fontSize: '24'
  },
  21: {
    ...baseVariants,
    fontSize: '21'
  },
  17: {
    ...baseVariants,
    fontSize: '17'
  },
  12: {
    ...baseVariants,
    fontSize: '12'
  }
}

export interface TitleBaseProps extends SpaceProps, ColorProps {
  className?: string
  style?: React.CSSProperties
  level?: '44' | '36' | '27' | '24' | '21' | '17' | '12'
}

const Title = styled('h2')<TitleBaseProps>(
  {
    margin: 0
  },
  variant({
    variants,
    prop: 'level'
  }),
  space,
  color
)

export default Title
