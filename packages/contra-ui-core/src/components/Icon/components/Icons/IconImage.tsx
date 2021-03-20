import React from 'react'
import { IconBaseTypes, iconDefaultProps } from '../IconTypes'

export interface IconTypes
  extends IconBaseTypes,
    React.SVGProps<SVGSVGElement> {}

const IconImage: React.FC<IconTypes> = ({ size, color, ...props }) => (
  <svg
    width={size}
    height={size}
    {...props}
    viewBox="0 0 43 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="1.5"
      y="1"
      width="40"
      height="40"
      rx="6"
      stroke={color}
      strokeWidth="3"
    />
    <path
      d="M1.9458 16.3179L19.4486 33.8206L30.2178 23.0514L40.987 33.8206"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="25.0896"
      cy="12.282"
      r="4.12821"
      stroke={color}
      strokeWidth="3"
    />
  </svg>
)

IconImage.defaultProps = {
  ...iconDefaultProps,
}

export default IconImage
