export interface IconButtonBaseProps {
  className?: string
  style?: React.CSSProperties

  children?: React.ReactNode
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'
  variant?: 'primary' | 'secondary' | 'teritary' | 'destructive'
}
