import React from 'react'
import styled from 'styled-components'

import { variant } from 'styled-system'

import { allSystemProps, AllSystemProps, sfp } from '~/utils/props'

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

export interface BodyProps extends AllSystemProps {
  className?: string
  style?: React.CSSProperties
  level?: '21' | '17' | '15' | '12'
  color?: string
}

const Body = styled('p').withConfig<BodyProps>({
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

export default Body
