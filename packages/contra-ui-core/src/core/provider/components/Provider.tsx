import React from 'react'
import { ThemeProvider } from 'styled-components'
import { DefaultTheme, Theme } from '~/core/theme'

import GlobalStyles from './styles/GlobalStyles'

interface ProviderProps {
  theme?: Partial<Theme>
  children: React.ReactChildren | React.ReactChild
}

const FONT_URL =
  'https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap'

const Provider: React.FC<ProviderProps> = ({ children }) => {
  React.useEffect(() => {
    const fontLink = document.createElement('link')
    fontLink.href = FONT_URL
    fontLink.rel = 'stylesheet'
    document.head.appendChild(fontLink)
  }, [])

  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

export default Provider
