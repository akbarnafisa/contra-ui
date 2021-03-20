import React from 'react'
import { IconBaseTypes, iconDefaultProps } from '../IconTypes'

export interface IconTypes
  extends IconBaseTypes,
    React.SVGProps<SVGSVGElement> {}

const IconPlay: React.FC<IconTypes> = ({ size, color, fill, ...props }) => (
  <svg
    width={size}
    height={size}
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 3L19 12L5 21V3Z"
      stroke={color}
      strokeWidth="2"
      fill={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

IconPlay.defaultProps = {
  ...iconDefaultProps,
}

export default IconPlay
