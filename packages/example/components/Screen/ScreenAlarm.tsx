import {
  Box,
  Body,
  Flex,
  Title,
  Toggle,
  IconPlus,
  IconButton,
} from '@contra-ui/core'

import React, { useState } from 'react'

const AlarmSchedule = () => {
  interface ScheduleListProps {
    id: number
    time: string
    format: string
    schedule: string[]
    desc: string
    isActive: boolean
  }

  const [scheduleList, setScheduleList] = useState<ScheduleListProps[]>([
    {
      id: 112331,
      time: '06:30',
      format: 'AM',
      schedule: ['S', 'M', 'T', 'W'],
      desc: 'Wakeup in morning',
      isActive: true,
    },
    {
      id: 223123,
      time: '10:30',
      format: 'AM',
      schedule: ['Weekdays'],
      desc: 'Caption for title',
      isActive: false,
    },
    {
      id: 4213213,
      time: '11:30',
      format: 'AM',
      schedule: ['T', 'W', 'T', 'S'],
      desc: 'Caption for title',
      isActive: true,
    },
  ])


  interface ScheduleInfoProps {
    item: ScheduleListProps
  }

  const onChange = (id: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const newData = scheduleList.map(item => {
      if (item.id === id) {
        item.isActive = e.target.checked
      }
      return item
    })
    setScheduleList(newData)
  }


  const ScheduleInfo: React.FC<ScheduleInfoProps> = ({
    item,
  }) => (
    <Box>
      <Flex alignItems="center">
        <Title
          level="44"
          mr="xs"
          color={item.isActive ? '' : 'grey06'}
        >
          {item.time}
        </Title>
        <Title
          level="17"
          color={item.isActive ? '' : 'grey06'}
        >
          {item.format}
        </Title>
      </Flex>
      <Flex mb="xxs">
        {item.schedule.map((schedule, index) => (
          <Title
            level="21"
            mr="xs"
            color={item.isActive ? '' : 'grey06'}
            key={index}
          >
            {schedule}
          </Title>
        ))}
      </Flex>
      <Body
        level="12"
        color={
          item.isActive ? 'grey07' : 'grey06'
        }
      >
        {item.desc}
      </Body>
    </Box>
  )
  return (
    <>
      {scheduleList.map((item) => (
        <Flex
          alignItems="center"
          justifyContent="space-between"
          py="lg"
          key={item.id}
        >
          <ScheduleInfo item={item} />
          <Toggle
            checked={item.isActive}
            onChange={onChange(item.id)}
          />
        </Flex>
      ))}
    </>
  )
}

const ScreenAlarm = () => (
  <Box
    mb="lg"
    width="100%"
    maxWidth="375px"
    bg="white"
    borderRadius="md"
    px="lg"
  >
    <Title level="44"  mb="xl" mt="xxxl">
      Alarm
    </Title>
    <AlarmSchedule />
    <Flex variant="center" mb="xxl" mt="xxxl">
      <IconButton size="large" appearance="teritary">
        <IconPlus width="28" height="28" />
      </IconButton>
    </Flex>
  </Box>
)

export default ScreenAlarm
