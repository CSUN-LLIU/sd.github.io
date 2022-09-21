import NavBar from '../components/nav-bar/NavBar'
import '../styles/globals.css'
import '../styles/bit-by-bit/styles.css'

function MyApp({ Component, pageProps }) {
  return (
    <NavBar>
      <Component {...pageProps} />
    </NavBar>
  )
}

export default MyApp
