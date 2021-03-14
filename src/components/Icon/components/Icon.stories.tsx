/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'

import {
  IconBell,
  IconCheck,
  IconChevron,
  IconCross,
  IconFacebook,
  IconHeart,
  IconImage,
  IconLock,
  IconMail,
  IconMessageCircle,
  IconMessageSquare,
  IconMic,
  IconMinus,
  IconNavigation,
  IconPause,
  IconPlay,
  IconPlus,
  IconRepeat,
  IconRewind,
  IconSearch,
  IconSend,
  IconShare,
  IconShuffle,
  IconStar,
  IconTwitter,
  IconUser,
} from '../index'

import { Box } from '~/components/Box'
import { Body } from '~/components/Typography'

const Component = [
  { name: 'IconBell', component: <IconBell /> },
  { name: 'IconCheck', component: <IconCheck /> },
  { name: 'IconChevron', component: <IconChevron /> },
  { name: 'IconCross', component: <IconCross /> },
  { name: 'IconFacebook', component: <IconFacebook /> },
  { name: 'IconHeart', component: <IconHeart /> },
  { name: 'IconImage', component: <IconImage /> },
  { name: 'IconLock', component: <IconLock /> },
  { name: 'IconMail', component: <IconMail /> },
  { name: 'IconMessageCircle', component: <IconMessageCircle /> },
  { name: 'IconMessageSquare', component: <IconMessageSquare /> },
  { name: 'IconMic', component: <IconMic /> },
  { name: 'IconMinus', component: <IconMinus /> },
  { name: 'IconNavigation', component: <IconNavigation /> },
  { name: 'IconPause', component: <IconPause /> },
  { name: 'IconPlay', component: <IconPlay /> },
  { name: 'IconPlus', component: <IconPlus /> },
  { name: 'IconRepeat', component: <IconRepeat /> },
  { name: 'IconRewind', component: <IconRewind /> },
  { name: 'IconSearch', component: <IconSearch /> },
  { name: 'IconSend', component: <IconSend /> },
  { name: 'IconShare', component: <IconShare /> },
  { name: 'IconShuffle', component: <IconShuffle /> },
  { name: 'IconStar', component: <IconStar /> },
  { name: 'IconTwitter', component: <IconTwitter /> },
  { name: 'IconUser', component: <IconUser /> },
]

export default {
  title: 'Component/Icon',
  argTypes: {
    disabled: {
      table: {
        disable: true,
      },
    },
  },
}

export const Example = () => (
  <Box
    alignContent="start"
    display="grid"
    justifyContent="space-around"
    gridColumnGap="16px"
    gridRowGap="24px"
    gridTemplateColumns="repeat(auto-fill, 128px)"
  >
    {Component.map(v => {
      return (
        <Box position="relative" height="128px" width="128px" key={v.name}>
          <Box
            position="absolute"
            left="50%"
            top="40px"
            maxWidth="88px"
            style={{
              transform: 'translate(-50%, -50%)',
            }}
          >
            {v.component}
          </Box>
          <Box
            position="absolute"
            left="50%"
            top="84px"
            padding="0 8px"
            width="100%"
            style={{
              transform: 'translate(-50%, -50%)',
            }}
          >
            <Body
              textAlign="center"
              level="12"
              style={{
                wordBreak: 'break-all',
              }}
            >
              {v.name}
            </Body>
          </Box>
        </Box>
      )
    })}
  </Box>
)
