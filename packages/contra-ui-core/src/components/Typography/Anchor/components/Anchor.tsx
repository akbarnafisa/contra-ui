import React from 'react'
import styled from 'styled-components'

import { variant } from 'styled-system'

import { allSystemProps, AllSystemProps, sfp } from '~/utils/props'

const baseVariants = {
  fontFamily: 'body',
  color: 'grey09',
  fontWeight: 'medium',
  lineHeight: 'body',
  textDecoration: 'underline'
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

export type StyledSystemProps = AllSystemProps

export interface AnchorProps extends StyledSystemProps {
  className?: string
  style?: React.CSSProperties
  level?: '21' | '17' | '15' | '12'
  color?: string
}

const Anchor = styled('a').withConfig<AnchorProps>({
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

export default Anchor
