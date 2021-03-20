import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'

import { BadgeBaseProps } from './BadgeTypes'
import { BadgeBaseStyle } from './BadgeStyles'

export interface BadgeProps extends BadgeBaseProps, SpaceProps {}

const ButtonBase = styled.span<BadgeProps>(BadgeBaseStyle, space)

export default ButtonBase
