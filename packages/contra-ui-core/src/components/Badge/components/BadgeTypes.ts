export interface BadgeBaseProps {
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
  appearance?: 'pink' | 'yellow' | 'green' | 'red' | 'blue'
  disabled?: boolean
}
