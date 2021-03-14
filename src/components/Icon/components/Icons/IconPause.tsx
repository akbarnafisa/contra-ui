import React from 'react'
import { IconBaseTypes, iconDefaultProps } from '../IconTypes'

export interface IconTypes
  extends IconBaseTypes,
    React.SVGProps<SVGSVGElement> {}

const IconPause: React.FC<IconTypes> = ({ size, color, fill, ...props }) => (
  <svg
    width={size}
    height={size}
    {...props}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.6667 4.66675H7V23.3334H11.6667V4.66675Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={fill}
    />
    <path
      d="M21.0002 4.66675H16.3335V23.3334H21.0002V4.66675Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={fill}
    />
  </svg>
)

IconPause.defaultProps = {
  ...iconDefaultProps,
}

export default IconPause
