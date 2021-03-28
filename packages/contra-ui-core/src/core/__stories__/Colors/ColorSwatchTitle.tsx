import React from 'react'

import { Box } from '~/components/Box'
import { Body, Title } from '~/components/Typography'
import { Flex } from '~/components/Layout'

interface Props {
  bg: string
  title: string
  hex: string
}

const ColorSwatchTitle: React.FC<Props> = ({ bg, title, hex }) => (
  <Box
    bg={bg}
    p="md"
    borderTopLeftRadius="xs"
    borderTopRightRadius="xs"
    boxShadow="0 4px 8px -2px rgba(0, 0, 0, 0.32)"
    position="relative"
    zIndex={1}
  >
    <Box>
      <Title level="17" color="white">
        {title}
      </Title>
    </Box>
    <Flex justifyContent="space-between" mt="md">
      <Body level="15" color="white">
        {bg.slice(-2)}
      </Body>
      <Body level="15" color="white">
        {hex}
      </Body>
    </Flex>
  </Box>
)

export default ColorSwatchTitle
