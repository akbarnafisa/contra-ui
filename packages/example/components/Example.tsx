import { Box, Title } from '@contra-ui/core'

import Container from './Layout/Container'
import ScreenChat from './Screen/ScreenChat'
import ScreenProfile from './Screen/ScreenProfile'

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
        {/* <ScreenChat /> */}
        <ScreenProfile />
      </>
    </Container>
  </Box>
)

export default Example
