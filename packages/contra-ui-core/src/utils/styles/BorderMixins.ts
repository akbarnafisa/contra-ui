const BorderMixins = (border: string, radius: string) =>
  ({
    '&::after': {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      border: `${border}`,
      borderRadius: `${radius}`,
      content: '""',
    },
  } as const)

export default BorderMixins
