import React from 'react'
import { IconBaseTypes, iconDefaultProps } from '../IconTypes'

export interface IconTypes
  extends IconBaseTypes,
    React.SVGProps<SVGSVGElement> {}

const IconMessageSquare: React.FC<IconTypes> = ({
  size,
  color,
  fill,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    {...props}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.75 11.25C15.75 11.6478 15.592 12.0294 15.3107 12.3107C15.0294 12.592 14.6478 12.75 14.25 12.75H5.25L2.25 15.75V3.75C2.25 3.35218 2.40804 2.97064 2.68934 2.68934C2.97064 2.40804 3.35218 2.25 3.75 2.25H14.25C14.6478 2.25 15.0294 2.40804 15.3107 2.68934C15.592 2.97064 15.75 3.35218 15.75 3.75V11.25Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      fill={fill}
      strokeLinejoin="round"
    />
  </svg>
)

IconMessageSquare.defaultProps = {
  ...iconDefaultProps,
}

export default IconMessageSquare
