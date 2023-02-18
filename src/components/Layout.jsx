import { NavBar } from './'
import { Container } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'

const Layout = ({ children }) => {
  return (
    <div id="app">
      <NavBar />
      <Container>{children}</Container>
      <ToastContainer />
    </div>
  )
}

export default Layout
