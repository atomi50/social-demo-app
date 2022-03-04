import Head from 'next/head'
import Header from '../components/Header'
import Feed from '../components/Feed'

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Social Demo App</title>
      </Head>
      <Header />

      <Feed />
      {/* Modal */}
    </div>
  )
}

export default Home
