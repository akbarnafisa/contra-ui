import styled from 'styled-components'
import { commonProps } from '~/utils/props'

import { BadgeBaseProps } from './BadgeTypes'
import { BadgeBaseStyle } from './BadgeStyles'

export interface BadgeProps extends BadgeBaseProps {}

const ButtonBase = styled.span<BadgeProps>(BadgeBaseStyle, commonProps)

export default ButtonBase
