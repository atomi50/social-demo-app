import { getProviders, signIn } from 'next-auth/react'
import Header from '../../components/Header'

function SignIn({ providers }) {
  return (
    <div>
      <Header />

      <div>
        <img
          className="h-80 "
          src="https://i.pinimg.com/originals/3b/e9/b1/3be9b13213fa3b12420380b91de92ed1.png"
          alt="social-app-demo-logo"
        />
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="mb-1 rounded-lg bg-blue-500 p-3 text-white"
                onClick={() => signIn(provider.id, { callbackUrl: '/' })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}

export default SignIn
