import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'next-auth/client'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Avail bot</title>
    </Head>
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  </>
}

export default MyApp
