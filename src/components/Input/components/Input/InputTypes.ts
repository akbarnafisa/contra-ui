export interface InputBaseTypes {
  className?: string
  children?: React.ReactNode
  style?: React.CSSProperties

  disabled?: boolean
  placeholder?: string
}

export interface InputWrapperTypes {
  isError?: boolean
}
