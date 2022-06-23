import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"

function MyApp({ session, Component, pageProps }) {
  return (
    <div>
      <SessionProvider session={session}>
        <Navbar/>
        <Component {...pageProps} />
      </SessionProvider>
      

    </div>
  )
}

export default MyApp
