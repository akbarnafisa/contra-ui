import React from 'react'

import { Body } from '~/components/Typography'
import { Flex } from '~/components/Layout'

interface Props {
  bg: string
  hex: string
  isLast?: boolean
  textColor?: string
}

const ColorSwatchTitle: React.FC<Props> = ({
  bg,
  hex,
  textColor = 'grey09',
  isLast,
}) => {
  const setBorderBottom = (): object | null => (
    isLast
      ? {
        borderBottomLeftRadius: 'md',
        borderBottomRightRadius: 'md',
      }
      : null)
  return (
    <Flex
      justifyContent="space-between"
      padding="md"
      bg={bg}
      {...setBorderBottom()}
    >
      <Body level="15" color={textColor}>
        {bg}
      </Body>
      <Body level="15" color={textColor}>
        {hex}
      </Body>
    </Flex>
  )
}

export default ColorSwatchTitle
