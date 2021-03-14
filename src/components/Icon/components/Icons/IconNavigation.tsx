import React from 'react'
import { IconBaseTypes, iconDefaultProps } from '../IconTypes'

export interface IconTypes
  extends IconBaseTypes,
    React.SVGProps<SVGSVGElement> {}

const IconNavigation: React.FC<IconTypes> = ({
  size,
  color,
  fill,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.5 11L22.5 2L13.5 21L11.5 13L3.5 11Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={fill}
    />
  </svg>
)

IconNavigation.defaultProps = {
  ...iconDefaultProps,
}

export default IconNavigation
