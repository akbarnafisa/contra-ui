import React from 'react'
import uuid from 'react-uuid'
import { Box } from '~/components/Box'
import { BoxSystemProps } from '~/components/Box/components/BoxTypes'
import { Space } from '~/core/theme'

export interface StackProps
  extends BoxSystemProps,
    React.HTMLAttributes<HTMLDivElement> {
  gap?: Space
}

const Stack: React.FC<StackProps> = ({ children, gap, ...rest }) => {
  const isChildrenValid = React.Children.toArray(children).filter(
    React.isValidElement,
  )

  return (
    <Box {...rest}>
      {isChildrenValid.map((child, i) => {
        const isLastChild = isChildrenValid.length === i + 1
        const gapProps = { mb: isLastChild ? 0 : gap }
        if (typeof child === 'string' || child.type === React.Fragment) {
          return (
            <Box key={`stack-id-${uuid()}`} {...gapProps}>
              {child}
            </Box>
          )
        }

        return React.cloneElement(child, gapProps)
      })}
    </Box>
  )
}

export default Stack
