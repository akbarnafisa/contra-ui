import {
  Anchor,
  Box,
  Body,
} from '@contra-ui/core'

import Container from './Layout/Container'

const Hero = () => (
  <Box
    bg="blue05"
    width="100vw"
    maxHeight="90vh"
    overflow="hidden"
  >
    <Container textAlign="center" py="xxxl">
      <>
        <Box
          as="img"
          src="/logo.svg"
          mb="md"
        />
        <Body
          level="17"
          color="white"
        >
          Open source
          wireframe kit by
          <Anchor
            color="white"
            level="17"
            ml="xs"
            target="_blank"
            href="https://twitter.com/realvjy"
          >
            @realvjy
          </Anchor>
        </Body>
        <Box
          as="img"
          src="/hero.png"
          width="100%"
        />
      </>
    </Container>
  </Box>
)

export default Hero
