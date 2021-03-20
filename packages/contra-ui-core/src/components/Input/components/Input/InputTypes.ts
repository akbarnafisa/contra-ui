export interface InputBaseTypes {
  className?: string
  children?: React.ReactNode
  style?: React.CSSProperties

  placeholder?: string
}

export interface InputWrapperTypes {
  isError?: boolean
  disabled?: boolean
}
