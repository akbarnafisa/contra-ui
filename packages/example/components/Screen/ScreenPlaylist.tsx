import {
  Body,
  Box,
  Button,
  Flex,
  IconButton,
  IconCross,
  IconHeart,
  IconImage,
  IconPlay,
  IconPlus,
  Title,
} from '@contra-ui/core'

const PlaylistNavigation = () => (
  <Flex
    py="lg"
    mb="md"
    alignItems="center"
    justifyContent="space-between"
    mt="xl"
  >
    <IconCross />
    <Title
      position="relative"
      margin="auto"
      left="-12px"
      level="24"
    >
      Playlist
    </Title>
  </Flex>
)

const PlaylistTitle = () => (
  <Flex mb="xl">
    <Flex
      variant="center"
      bg="yellow05"
      border="2px solid black"
      borderRadius="md"
      minWidth={{ _: '112px', sm: '128px' }}
      minHeight={{ _: '112px', sm: '128px' }}
      mr="md"
    >
      <IconImage
        width="40"
        height="40"
        color="white"
      />
    </Flex>
    <Box>
      <Title level="36" mb="md">
        Love
      </Title>
      <Body>by Diya Kapoor</Body>
    </Box>
  </Flex>
)

const PlaylistButtons = () => (
  <Flex
    justifyContent="space-between"
    alignItems="center"
  >
    <Button appearance="teritary" flex="1">
      <Flex variant="center">
        <IconPlay width="24" height="24" />
        <Title level="21" ml="xs">
          Play
        </Title>
      </Flex>
    </Button>

    <IconButton
      appearance="teritary"
      ml="lg"
      mr="md"
    >
      <IconHeart fill="white" />
    </IconButton>

    <IconButton appearance="teritary">
      <IconPlus />
    </IconButton>
  </Flex>
)

const PlaylistMusic = () => {
  const musicItems = [
    {
      id: 1,
      appearance: 'red03',
      title: 'Matargasti',
      artist: 'Mohit Chauhan',
    },
    {
      id: 2,
      appearance: 'pink03',
      title: 'Attitude',
      artist: 'Lewis OfMan • Attitude',
    },
    {
      id: 3,
      appearance: 'green03',
      title: 'Try Everything',
      artist: 'Shakira • Zootopia',
    },
    {
      id: 4,
      appearance: 'yellow03',
      title: 'Sunflower',
      artist: 'Joseph Vincent • Sunflower',
    },
  ]
  return (
    <Box my="24px">
      {musicItems.map((item) => (
        <Flex py="24px" key={item.id}>
          <Box
            width="54px"
            height="54px"
            bg={item.appearance}
            border="md"
            borderColor="black"
            borderRadius="sm"
          />
          <Flex
            ml="sm"
            flexDirection="column"
            justifyContent="center"
          >
            <Title level="21" mb="xxs">
              {item.title}
            </Title>
            <Body level="15" color="grey07">
              {item.artist}
            </Body>
          </Flex>
        </Flex>
      ))}
    </Box>
  )
}

const ScreenPlaylist = () => (
  <Box
    mb="lg"
    width="100%"
    maxWidth="375px"
    bg="white"
    borderRadius="md"
    px="lg"
    position="relative"
  >
    <PlaylistNavigation />
    <PlaylistTitle />
    <PlaylistButtons />
    <PlaylistMusic />
  </Box>
)

export default ScreenPlaylist
