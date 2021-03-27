import React from 'react'
import styled from 'styled-components'

import { variant } from 'styled-system'

import { allSystemProps, AllSystemProps, sfp } from '~/utils/props'

const baseVariants = {
  fontFamily: 'title',
  color: 'black',
  fontWeight: 'bold',
  lineHeight: 'title',
}

const variants = {
  54: {
    ...baseVariants,
    fontSize: '54',
  },
  44: {
    ...baseVariants,
    fontSize: '44',
  },
  36: {
    ...baseVariants,
    fontSize: '36',
  },
  27: {
    ...baseVariants,
    fontSize: '27',
  },
  24: {
    ...baseVariants,
    fontSize: '24',
  },
  21: {
    ...baseVariants,
    fontSize: '21',
  },
  17: {
    ...baseVariants,
    fontSize: '17',
  },
  12: {
    ...baseVariants,
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
  },
  variant({
    variants,
    prop: 'level',
  }),
  allSystemProps
)

export default Title
