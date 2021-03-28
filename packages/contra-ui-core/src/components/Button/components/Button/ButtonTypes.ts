import { CommonSystemProps } from '~/utils/props'
export interface ButtonBaseProps extends CommonSystemProps {
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
  disabled?: boolean
  size?: 'small' | 'medium'
  variant?: 'primary' | 'secondary' | 'teritary' | 'destructive'
  block?: boolean
}
