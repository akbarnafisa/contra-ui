import React from 'react'
import { IconBaseTypes, iconDefaultProps } from '../IconTypes'

export interface IconTypes
  extends IconBaseTypes,
    React.SVGProps<SVGSVGElement> {}

const IconFacebook: React.FC<IconTypes> = ({ size, color, ...props }) => (
  <svg
    width={size}
    height={size}
    {...props}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.5 2H15.5C14.1739 2 12.9021 2.52678 11.9645 3.46447C11.0268 4.40215 10.5 5.67392 10.5 7V10H7.5V14H10.5V22H14.5V14H17.5L18.5 10H14.5V7C14.5 6.73478 14.6054 6.48043 14.7929 6.29289C14.9804 6.10536 15.2348 6 15.5 6H18.5V2Z"
      fill={color}
    />
  </svg>
)

IconFacebook.defaultProps = {
  ...iconDefaultProps,
}

export default IconFacebook
