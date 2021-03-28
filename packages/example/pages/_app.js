import {
  Provider,
  Box,
} from '@contra-ui/core'

import '../styles/global.css'
import '../styles/utility.css'

function MyApp({
  Component,
  pageProps,
}) {
  return (
    <Provider>
      <Component
        {...pageProps}
      />
    </Provider>
  )
}

export default MyApp
