import {
  Avatar,
  Badge,
  BadgeProps,
  Box,
  Body,
  Button,
  Flex,
  IconButton,
  IconMessageCircle,
  IconImage,
  IconPlus,
  Title,
} from '@contra-ui/core'

import ScreenNavigation from './common/ScreenNavigation'

const Header = () => (
  <Box
    bg="blue05"
    px="lg"
    borderBottomLeftRadius="xl"
    borderBottomRightRadius="xl"
  >
    <Flex variant="center" pt="72px" mb="lg">
      <Avatar
        size="144"
        entityName="Katrisa"
        src="/profile.png"
      />
    </Flex>
    <Title
      color="white"
      textAlign="center"
      level="36"
      mb="xs"
    >
      Katrisa Feona
    </Title>
    <Body
      color="white"
      textAlign="center"
      level="17"
    >
      @katiness
    </Body>
    <Flex
      alignItems="center"
      mt="lg"
      mb="xl"
      justifyContent="space-between"
    >
      <Button
        variant="teritary"
        block={true}
        mr="md"
      >
        <Flex variant="center">
          <IconMessageCircle
            width="24"
            height="24"
          />
          <Title level="21" ml="xs">
            Send message
          </Title>
        </Flex>
      </Button>
      <IconButton variant="teritary">
        <IconPlus width="28" height="28" />
      </IconButton>
    </Flex>
    <Flex
      justifyContent="space-between"
      textAlign="center"
      pb="xl"
    >
      <Box>
        <Title color="white" level="27" mb="xs">
          276
        </Title>
        <Body color="white" level="15">
          Images
        </Body>
      </Box>

      <Box>
        <Title color="white" level="27" mb="xs">
          62K
        </Title>
        <Body color="white" level="15">
          Followers
        </Body>
      </Box>

      <Box>
        <Title color="white" level="27" mb="xs">
          23
        </Title>
        <Body color="white" level="15">
          Following
        </Body>
      </Box>
    </Flex>
  </Box>
)

const Images = () => {
  const imageItems = [
    {
      id: 1,
      appearance: 'yellow05',
    },
    {
      id: 2,
      appearance: 'red05',
    },
    {
      id: 3,
      appearance: 'pink05',
    },
    {
      id: 4,
      appearance: 'green05',
    },
  ]
  return (
    <Box mt="lg" mb="md">
      <Title level="21" px="lg">
        Lates image
      </Title>
      <Flex py="md" px="md" overflow="scroll">
        {imageItems.map((item, index) => (
          <>
            <Flex
              key={item.id}
              bg={item.appearance}
              border="2px solid black"
              borderRadius="md"
              minWidth="140px"
              minHeight="160px"
              variant="center"
              mx="xs"
            >
              <IconImage
                color="white"
                width="40px"
                height="40px"
              />
            </Flex>
            {index === imageItems.length - 1 && (
              <Box pl="md" />
            )}
          </>
        ))}
      </Flex>
    </Box>
  )
}

const Tags = () => {
  interface TagItemsType
    extends Pick<BadgeProps, 'appearance'> {
    id: number
    title: string
  }

  const tagItems: TagItemsType[] = [
    {
      id: 1,
      title: 'Travel',
    },
    {
      id: 2,
      title: 'Big Foodie',
      appearance: 'yellow',
    },
    {
      id: 3,
      title: 'Photography',
      appearance: 'green',
    },
    {
      id: 4,
      title: 'Bollywood Movie',
      appearance: 'pink',
    },
    {
      id: 5,
      title: 'Sharukh Khan',
      appearance: 'red',
    },
  ]

  return (
    <Box px="md" mb="lg">
      <Title level="21" mb="sm">
        Tags
      </Title>
      <Flex flexWrap="wrap">
        {tagItems.map((item) => (
          <Badge
            key={item.id}
            appearance={item.appearance}
            ml="xs"
            mb="xs"
          >
            {item.title}
          </Badge>
        ))}
      </Flex>
    </Box>
  )
}

const ScreenProfile = () => (
  <Box
    width="100%"
    maxWidth="375px"
    bg="white"
    borderRadius="md"
    overflow="hidden"
  >
    <Header />
    <Images />
    <Tags />
    <ScreenNavigation />
  </Box>
)

export default ScreenProfile
