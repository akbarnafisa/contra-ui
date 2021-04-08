import React from 'react'
import styled from 'styled-components'
import { DefaultTheme as theme } from '~/core/theme'
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
    fontFamily: theme.fonts.body,
    color: theme.colors.grey09,
    fontWeight: theme.fontWeights.medium,
    lineHeight: theme.lineHeights.body,
    textDecoration: 'underline',
  },
  variant({
    variants,
    prop: 'level',
  }),
  allSystemProps
)

export default Anchor
