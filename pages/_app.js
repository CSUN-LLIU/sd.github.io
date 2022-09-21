import NavBar from '../components/nav-bar/NavBar'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <NavBar>
      <Component {...pageProps} />
    </NavBar>
  )
}

export default MyApp
