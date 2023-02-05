import { NavBar } from './'
import { Container } from 'react-bootstrap'

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Container>{children}</Container>
    </>
  )
}

export default Layout
