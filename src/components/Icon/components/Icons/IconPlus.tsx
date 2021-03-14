import React from 'react'
import { IconBaseTypes, iconDefaultProps } from '../IconTypes'

export interface IconTypes
  extends IconBaseTypes,
    React.SVGProps<SVGSVGElement> {}

const IconCheck: React.FC<IconTypes> = ({ size, color, ...props }) => (
  <svg
    width={size}
    height={size}
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 6L9 17L4 12"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

IconCheck.defaultProps = {
  ...iconDefaultProps,
}

export default IconCheck
