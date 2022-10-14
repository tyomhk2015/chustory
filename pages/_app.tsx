import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { FixedBackground } from '../components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <FixedBackground />
    </>
  )
}

export default MyApp
