import {
  Box,
  BoxProps,
} from '@contra-ui/core'

export interface ContainerProps
  extends BoxProps {
  children:
    | React.ReactChildren
    | React.ReactChild
}

const Container = ({
  children,
  ...props
}: ContainerProps) => {
  return (
    <Box
      maxWidth="1200px"
      m="0 auto"
      px={{
        _: 'md',
        md: 'lg',
      }}
      {...props}
    >
      {children}
    </Box>
  )
}

export default Container
