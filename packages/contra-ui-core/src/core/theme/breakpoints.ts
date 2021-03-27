type BreakpointsProp = Array<string> & {
  sm?: string
  md?: string
  lg?: string
  xl?: string
}

const breakpoints: BreakpointsProp = ['480px', '768px', '1024', '1200']
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

export default breakpoints
