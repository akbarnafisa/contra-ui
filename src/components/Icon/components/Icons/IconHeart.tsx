import React from 'react'
import { IconBaseTypes, iconDefaultProps } from '../IconTypes'

export interface IconTypes
  extends IconBaseTypes,
    React.SVGProps<SVGSVGElement> {}

const IconHeart: React.FC<IconTypes> = ({ size, color, fill, ...props }) => (
  <svg
    width={size}
    height={size}
    {...props}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.945 22C11.835 22 11.7249 22 11.6149 21.887H11.5049C9.08422 20.6441 3.3627 17.1412 1.38217 11.6045C1.05208 10.5876 0.281877 6.40678 2.70252 3.80791C4.1329 2.22599 5.45325 2 6.33349 2C8.42405 2 10.6246 3.24294 11.945 5.05085C13.2653 3.12994 15.2459 2 17.5565 2C18.4367 2 19.7571 2.22599 21.2975 3.80791C23.7181 6.40678 22.9479 10.7006 22.6178 11.6045C20.6373 17.2542 14.8057 20.6441 12.4951 21.887C12.2751 22 12.055 22 11.945 22Z"
      stroke={color}
      fill={fill}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

IconHeart.defaultProps = {
  ...iconDefaultProps,
}

export default IconHeart
