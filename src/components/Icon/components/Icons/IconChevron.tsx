import React from 'react'
import { IconBaseTypes, iconDefaultProps } from '../IconTypes'

export interface IconTypes
  extends IconBaseTypes,
    React.SVGProps<SVGSVGElement> {}

const IconChevron: React.FC<IconTypes> = ({ size, color, ...props }) => (
  <svg
    width={size}
    height={size}
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 18L16 12L10 6"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

IconChevron.defaultProps = {
  ...iconDefaultProps,
}

export default IconChevron
