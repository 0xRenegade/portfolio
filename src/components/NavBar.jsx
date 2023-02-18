import { useEffect, useContext } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useParams } from 'react-router-dom'
import ThemeContext from '../context/ThemeContext'

const NavBar = () => {
  const params = useParams()
  const { theme, setTheme } = useContext(ThemeContext)

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleTheme = (theme) => {
    setTheme(theme)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <Container fluid className="p-0">
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-center"
          >
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link onClick={() => handleScroll('about')} href="#">
                About Me
              </Nav.Link>
              <Nav.Link onClick={() => handleScroll('projects')} href="#">
                Projects
              </Nav.Link>
              <Nav.Link onClick={() => handleScroll('contact')} href="#">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-center"
          >
            <Nav>
              <Nav.Link onClick={() => handleTheme('dracula')} href="#">
                Dracula
              </Nav.Link>
              <Nav.Link onClick={() => handleTheme('terminal')} href="#">
                Terminal
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  )
}

export default NavBar
