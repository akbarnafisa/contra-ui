import { Box, Flex, Title } from '@contra-ui/core'

import Container from './Layout/Container'
import ScreenChat from './Screen/ScreenChat'
import ScreenProfile from './Screen/ScreenProfile'
import ScreenPlaylist from './Screen/ScreenPlaylist'
import ScreenAlarm from './Screen/ScreenAlarm'

const Example = () => (
  <Box bg="grey09">
    <Container py="xxxl">
      <>
        <Title
          level="44"
          color="white"
          mb="xxl"
          textAlign="center"
        >
          Examples
        </Title>
        <Flex
          flexWrap="wrap"
          justifyContent="space-around"
          alignItems="flex-start"
        >
          <ScreenChat />
          <ScreenProfile />
        </Flex>

        <Flex
          flexWrap="wrap"
          justifyContent="space-around"
          alignItems="flex-start"
        >
          <ScreenPlaylist />
          <ScreenAlarm />
        </Flex>
      </>
    </Container>
  </Box>
)

export default Example
