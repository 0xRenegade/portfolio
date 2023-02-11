import { NavBar } from './'
import { Container } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Container>{children}</Container>
      <ToastContainer />
    </>
  )
}

export default Layout
