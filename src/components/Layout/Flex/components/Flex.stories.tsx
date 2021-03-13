import * as React from 'react'

import Flex from './Flex'
import { Box } from '~/components/Box'

export default {
  title: 'Core/Layout',
  component: Flex,
}

export const FlexLayout = () => (
  <Box maxWidth="375px" m="0 auto">
    <Flex variant="center" mb="xxs">
      <Box bg="primary" p="md" mx="xxxs" />
      <Box bg="primary" p="md" mx="xxxs" />
      <Box bg="primary" p="md" mx="xxxs" />
    </Flex>

    <Flex justifyContent="space-around" mb="xxs">
      <Box bg="primary" p="md" mx="xxxs" />
      <Box bg="primary" p="md" mx="xxxs" />
      <Box bg="primary" p="md" mx="xxxs" />
    </Flex>

    <Flex justifyContent="flex-end" mb="xxs">
      <Box bg="primary" p="md" mx="xxxs" />
      <Box bg="primary" p="md" mx="xxxs" />
      <Box bg="primary" p="md" mx="xxxs" />
    </Flex>
  </Box>
)
