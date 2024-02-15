import Head from 'next/head'
import Home from './(home)'

export default function HomeIndex() {
  return (
    <>
      <Head>
        <title>Home | Ignite Timer</title>
      </Head>

      <Home />
    </>
  )
}
