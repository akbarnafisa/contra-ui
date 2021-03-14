import React from 'react'
import { IconBaseTypes, iconDefaultProps } from '../IconTypes'

export interface IconTypes
  extends IconBaseTypes,
    React.SVGProps<SVGSVGElement> {}

const IconStar: React.FC<IconTypes> = ({ size, color, fill, ...props }) => (
  <svg
    width={size}
    height={size}
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.9052 1.57507C12.7405 1.2241 12.3877 1 12 1C11.6123 1 11.2595 1.2241 11.0948 1.57507L8.23127 7.67512L1.84809 8.65619C1.47772 8.71311 1.17026 8.97232 1.05153 9.32772C0.932796 9.68313 1.02272 10.0751 1.2845 10.3432L5.93176 15.1029L4.83304 21.839C4.77139 22.217 4.93103 22.597 5.24413 22.8175C5.55722 23.0381 5.96878 23.0604 6.30392 22.8751L12 19.7253L17.6961 22.8751C18.0312 23.0604 18.4428 23.0381 18.7559 22.8175C19.069 22.597 19.2286 22.217 19.167 21.839L18.0682 15.1029L22.7155 10.3432C22.9773 10.0751 23.0672 9.68313 22.9485 9.32772C22.8297 8.97232 22.5223 8.71311 22.1519 8.65619L15.7687 7.67512L12.9052 1.57507Z"
      fill={fill}
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

IconStar.defaultProps = {
  ...iconDefaultProps,
}

export default IconStar
