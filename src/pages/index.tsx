import Head from 'next/head'

import Twitter from '@assets/twitter.svg'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>

      <main>
        <Twitter />
        <h1>Boilerplate NextJS</h1>
      </main>
    </>
  )
}

export default Home
