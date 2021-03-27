import React from 'react'
import { AllSystemProps } from '~/utils/props'

export type StyledSystemProps = AllSystemProps

export interface BoxSystemProps extends StyledSystemProps {
  className?: string
  style?: React.CSSProperties
  color?: string
}
