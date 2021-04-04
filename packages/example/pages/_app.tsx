import { Provider } from '@contra-ui/core'
import { AppProps } from "next/app";

import '../styles/global.css'
import '../styles/utility.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
