import {
  Avatar,
  AvatarProps,
  Box,
  Body,
  Flex,
  Input,
  Title,
  IconSearch,
} from '@contra-ui/core'

import ScreenNavigation from './common/ScreenNavigation'

const Chats = () => {
  interface ChatItemsTypes
    extends Pick<AvatarProps, 'appearance'> {
    id: number
    name: string
    msg: string
    msgLength?: number
    time: string
  }

  const ChatItems: ChatItemsTypes[] = [
    {
      id: 1,
      name: 'Charlie',
      msg: 'Please have a look.',
      msgLength: 2,
      time: '2:45pm',
      appearance: 'yellow',
    },
    {
      id: 2,
      name: 'Sheldon',
      msg: 'There is no alcohal to the moon',
      time: '3:54am',
      appearance: 'green',
    },

    {
      id: 3,
      name: 'Kerry',
      msg:
        'You always working. it is 4 in the morning',
      time: '27 Mar',
      appearance: 'yellow',
    },

    {
      id: 4,
      name: 'Leonard',
      msg: 'Why should we talk parents',
      time: '12 Feb',
      appearance: 'red',
    },

    {
      id: 5,
      name: 'Garry',
      msg: 'Can you please reply my message',
      msgLength: 2,
      time: '1 Jan',
      appearance: 'pink',
    },
  ]

  return (
    <>
      {ChatItems.map((item) => (
        <Flex key={item.id} py="lg">
          <Flex flex="1">
            <Avatar
              appearance={item.appearance}
              entityName={item.name}
            />
          </Flex>

          <Flex
            ml="sm"
            flex="4"
            flexDirection="column"
            maxWidth="65%"
          >
            <Title
              className="u-ellipsis"
              level="21"
              mb="xxxs"
            >
              {item.name}
            </Title>
            <Body
              className="u-ellipsis"
              level="15"
            >
              {item.msg}
            </Body>
          </Flex>

          <Flex
            flexDirection="column"
            flex="1"
            alignItems="flex-end"
          >
            <Title
              level="12"
              color="grey06"
              mb="sm"
            >
              {item.time}
            </Title>
            {item.msgLength && (
              <Flex
                bg="red05"
                color="white"
                height="16px"
                width="16px"
                variant="center"
                borderRadius="50%"
              >
                <Title level="12" color="white">
                  {item.msgLength}
                </Title>
              </Flex>
            )}
          </Flex>
        </Flex>
      ))}
    </>
  )
}

const ScreenChat = () => (
  <Box
    mb="lg"
    width="100%"
    maxWidth="375px"
    bg="white"
    borderRadius="md"
  >
    <Box mx="lg" pt="xxxl" mb="md">
      <Title mb="lg" level="44">
        Chat
      </Title>
      <Input placeholder="Search">
        <Box ml="md">
          <IconSearch />
        </Box>
      </Input>

      <Chats />
    </Box>

    <ScreenNavigation />
  </Box>
)

export default ScreenChat
