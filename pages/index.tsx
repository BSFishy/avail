import React from 'react'
// import { signIn, signOut, useSession } from 'next-auth/client'
import Layout from '../components/Layout'

const Home = () => {
  // const [ session, loading ] = useSession()

  // return <>
  //   {!session && <>
  //       Not signed in <br/>
  //       <button onClick={signIn}>Sign in</button>
  //   </>}
  //   {session && <>
  //       Signed in as {session.user.email} <br/>
  //       <button onClick={signOut}>Sign out</button>
  //   </>}
  // </>
  return <Layout>
    Content goes here
  </Layout>
}

export default Home
