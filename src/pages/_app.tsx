import React from 'react'
import { AppProps } from 'next/app'
import { globalStyles } from '@/styles/global'
import { Layout } from '@/components/layout/Layout'
import { Header } from '@/components/header/Header'

globalStyles()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Header />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
