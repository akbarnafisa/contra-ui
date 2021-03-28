import {
  Flex,
  IconUser,
  IconSearch,
  IconStar,
  IconMessageCircle,
  Title,
} from '@contra-ui/core'

const navItems = [
  {
    title: 'Home',
    icon: <IconUser />,
  },
  {
    title: 'Search',
    icon: <IconSearch />,
  },
  {
    title: 'Chat',
    icon: (
      <IconMessageCircle />
    ),
  },
  {
    title: 'About',
    icon: <IconStar />,
  },
]

const ScreenNavigation = () => (
  <Flex
    borderTop="2px solid"
    borderColor="black"
  >
    {navItems.map(
      (nav, index) => (
        <Flex
          height="90px"
          variant="center"
          flexDirection="column"
          flex="1"
          key={index}
        >
          {nav.icon}
          <Title
            level="12"
            mt="sm"
          >
            {nav.title}
          </Title>
        </Flex>
      )
    )}
  </Flex>
)

export default ScreenNavigation
