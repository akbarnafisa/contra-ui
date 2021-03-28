import React from 'react'
import styled from 'styled-components'

import css from '@styled-system/css'
import { variant } from 'styled-system'

import { allSystemProps, AllSystemProps, sfp } from '~/utils/props'

const variants = {
  21: {
    fontSize: '21',
  },
  17: {
    fontSize: '17',
  },
  15: {
    fontSize: '15',
  },
  12: {
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
  {},
  variant({
    variants,
    prop: 'level',
  }),
  css({
    margin: 0,
    fontFamily: 'body',
    color: 'grey09',
    fontWeight: 'normal',
    lineHeight: 'body',
  }),
  allSystemProps
)

export default Body
