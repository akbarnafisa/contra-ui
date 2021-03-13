export type AvatarAppearance = 'blue' | 'pink' | 'yellow' | 'green' | 'red'

export interface AvatarBaseProps {
  size?: '48' | '54' | '64' | '144'
  entityName?: string
  src?: string
  alt?: string
  appearance?: AvatarAppearance
  className?: string
  style?: React.CSSProperties
}
