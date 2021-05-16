import Head from 'next/head'
import Image from 'next/image'
import Title from "../components/Content"

export default function Home() {
  return (
    <main>

      <Head>
        <title>Anders Bergquist</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Title />

    </main>
  )
}
