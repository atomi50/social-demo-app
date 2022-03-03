import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Social Demo App</title>
      </Head>

      {/* Header */}
      <Header />
      {/* Feed */}
      {/* Modal */}
    </div>
  )
}

export default Home
