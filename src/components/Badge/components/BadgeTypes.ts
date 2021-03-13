export type BadgeAppearance = 'pink' | 'yellow' | 'green' | 'red'

export interface BadgeBaseProps {
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
  appearance?: BadgeAppearance
  disabled?: boolean
}
