const blue = {
  blue01: '#E9E7FC',
  blue03: '#8094FF',
  blue05: '#1947E5'
}

const pink = {
  pink01: '#FFF3F8',
  pink03: '#FFC7DE',
  pink05: '#FF89BB'
}

const yellow = {
  yellow01: '#FFF4CC',
  yellow03: '#FFD465',
  yellow05: '#FFBD12'
}

const green = {
  green01: '#D6FCF7',
  green03: '#61E4C5',
  green05: '#00C6AE'
}

const red = {
  red01: '#FFE8E8',
  red03: '#FF9692',
  red05: '#F95A2C'
}

const grey = {
  grey01: '#F4F5F7',
  grey03: '#EEEFF4',
  grey04: '#D9DBE1',
  grey06: '#969BAB',
  grey07: '#474A57',
  grey09: '#18191F'
}

const appearance = {
  primary: blue.blue05,
  success: green.green05,
  error: red.red05,
  inactive: grey.grey03
}

const colors = {
  white: '#fff',
  black: '#000',

  ...blue,
  ...pink,
  ...yellow,
  ...green,
  ...red,
  ...grey,
  ...appearance
}

export default colors
