import React from 'react'
import { Box } from '~/components/Box'

import ColorSwatchTitle from './ColorSwatchTitle'
import ColorSwatchItem from './ColorSwatchItem'

export default {
  title: 'Core/Color',
  parameters: {
    controls: {
      disabled: true,
    },
  },
}

const LAYOUT_WRAPPER = {
  width: '325px',
}

const primaryData = [
  { bg: 'blue05', hex: '#1947E5', title: 'BLUE' },
  { bg: 'blue01', hex: '#E9E7FC' },
  { bg: 'blue03', hex: '#8094FF' },
  {
    bg: 'blue05', hex: '#1947E5', textColor: 'white', isLast: true,
  },
]

export const Primary = () => (
  <Box style={LAYOUT_WRAPPER}>
    {primaryData.map((color) => (color.title ? (
      <ColorSwatchTitle bg={color.bg} hex={color.hex} title={color.title} />
    ) : (
      <ColorSwatchItem
        bg={color.bg}
        hex={color.hex}
        textColor={color.textColor}
        isLast={color.isLast}
      />
    )))}
  </Box>
)

const pinkData = [
  { bg: 'pink05', hex: '#FF89BB', title: 'PINK' },
  { bg: 'pink01', hex: '#FFF3F8' },
  { bg: 'pink03', hex: '#FFC7DE' },
  {
    bg: 'pink05', hex: '#FF89BB', textColor: 'white', isLast: true,
  },
]

export const Pink = () => (
  <Box style={LAYOUT_WRAPPER}>
    {pinkData.map((color) => (color.title ? (
      <ColorSwatchTitle bg={color.bg} hex={color.hex} title={color.title} />
    ) : (
      <ColorSwatchItem
        bg={color.bg}
        hex={color.hex}
        textColor={color.textColor}
        isLast={color.isLast}
      />
    )))}
  </Box>
)

const yellowData = [
  { bg: 'yellow05', hex: '#FFBD12', title: 'YELLOW' },
  { bg: 'yellow01', hex: '#FFF4CC' },
  { bg: 'yellow03', hex: '#FFD465' },
  {
    bg: 'yellow05',
    hex: '#FFBD12',
    textColor: 'white',
    isLast: true,
  },
]

export const Yellow = () => (
  <Box style={LAYOUT_WRAPPER}>
    {yellowData.map((color) => (color.title ? (
      <ColorSwatchTitle bg={color.bg} hex={color.hex} title={color.title} />
    ) : (
      <ColorSwatchItem
        bg={color.bg}
        hex={color.hex}
        textColor={color.textColor}
        isLast={color.isLast}
      />
    )))}
  </Box>
)

const greenData = [
  { bg: 'green05', hex: '#00C6AE', title: 'GREEN' },
  { bg: 'green01', hex: '#D6FCF7' },
  { bg: 'green03', hex: '#61E4C5' },
  {
    bg: 'green05',
    hex: '#00C6AE',
    textColor: 'white',
    isLast: true,
  },
]

export const Green = () => (
  <Box style={LAYOUT_WRAPPER}>
    {greenData.map((color) => (color.title ? (
      <ColorSwatchTitle bg={color.bg} hex={color.hex} title={color.title} />
    ) : (
      <ColorSwatchItem
        bg={color.bg}
        hex={color.hex}
        textColor={color.textColor}
        isLast={color.isLast}
      />
    )))}
  </Box>
)

const redData = [
  { bg: 'red05', hex: '#F95A2C', title: 'RED' },
  { bg: 'red01', hex: '#FFE8E8' },
  { bg: 'red03', hex: '#FF9692' },
  {
    bg: 'red05',
    hex: '#F95A2C',
    textColor: 'white',
    isLast: true,
  },
]

export const Red = () => (
  <Box style={LAYOUT_WRAPPER}>
    {redData.map((color) => (color.title ? (
      <ColorSwatchTitle bg={color.bg} hex={color.hex} title={color.title} />
    ) : (
      <ColorSwatchItem
        bg={color.bg}
        hex={color.hex}
        textColor={color.textColor}
        isLast={color.isLast}
      />
    )))}
  </Box>
)

const greyData = [
  { bg: 'grey06', hex: '#969BAB', title: 'GREY' },
  { bg: 'grey01', hex: '#F4F5F7' },
  { bg: 'grey03', hex: '#EEEFF4' },
  { bg: 'grey04', hex: '#D9DBE1' },
  { bg: 'grey06', hex: '#969BAB' },
  { bg: 'grey07', hex: '#474A57' },
  {
    bg: 'grey09',
    hex: '#18191F',
    textColor: 'white',
    isLast: true,
  },
]

export const Grey = () => (
  <Box style={LAYOUT_WRAPPER}>
    {greyData.map((color) => (color.title ? (
      <ColorSwatchTitle bg={color.bg} hex={color.hex} title={color.title} />
    ) : (
      <ColorSwatchItem
        bg={color.bg}
        hex={color.hex}
        textColor={color.textColor}
        isLast={color.isLast}
      />
    )))}
  </Box>
)
