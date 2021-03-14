export interface ButtonBaseProps {
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
  disabled?: boolean
  size?: 'small' | 'medium'
  variant?: 'primary' | 'secondary' | 'teritary' | 'destructive'
  block?: boolean
}
