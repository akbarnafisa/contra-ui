import space from './space'

const borders = {
  none: 'none',
  thin: '1px solid',
  md: '2px solid',
}

const radii = {
  ...space,
  none: 0,
  round: '99999em',
}

export default {
  borders,
  radii,
}
