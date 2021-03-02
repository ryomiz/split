import React from 'react'
import { AppProps } from 'next/app'
import 'destyle.css'
import 'src/styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}

export default MyApp
