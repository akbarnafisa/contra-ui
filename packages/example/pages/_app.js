import { Provider } from '@contra-ui/core'
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
