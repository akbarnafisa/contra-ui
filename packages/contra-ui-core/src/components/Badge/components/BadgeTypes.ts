import { CommonSystemProps } from '~/utils/props'

export interface BadgeBaseProps extends CommonSystemProps {
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
  appearance?: 'pink' | 'yellow' | 'green' | 'red' | 'blue'
  disabled?: boolean
}
