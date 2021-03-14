export interface AvatarBaseProps {
  size?: '48' | '54' | '64' | '144'
  entityName?: string
  src?: string
  alt?: string
  appearance?: 'blue' | 'pink' | 'yellow' | 'green' | 'red'
  className?: string
  style?: React.CSSProperties
}
