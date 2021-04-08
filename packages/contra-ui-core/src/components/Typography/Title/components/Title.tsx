import React from 'react'
import styled from 'styled-components'
import { DefaultTheme as theme } from '~/core/theme'
import { variant } from 'styled-system'

import { allSystemProps, AllSystemProps, sfp } from '~/utils/props'

const variants = {
  54: {
    fontSize: '54',
  },
  44: {
    fontSize: '44',
  },
  36: {
    fontSize: '36',
  },
  27: {
    fontSize: '27',
  },
  24: {
    fontSize: '24',
  },
  21: {
    fontSize: '21',
  },
  17: {
    fontSize: '17',
  },
  12: {
    fontSize: '12',
  },
}

export interface TitleProps extends AllSystemProps {
  className?: string
  style?: React.CSSProperties
  level?: '54' | '44' | '36' | '27' | '24' | '21' | '17' | '12'
  color?: string
}

const Title = styled('h2').withConfig<TitleProps>({
  shouldForwardProp: sfp(['level']),
})(
  {
    margin: 0,
    fontFamily: theme.fonts.title,
    color: theme.colors.black,
    fontWeight: theme.fontWeights.bold,
    lineHeight: theme.lineHeights.title
  },
  variant({
    variants,
    prop: 'level',
  }),
  allSystemProps
)

export default Title
