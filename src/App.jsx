import { useState } from 'react'
import { Router } from './router'
import { Layout } from './components'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import styled from 'styled-components'
import ThemeContext from './context/ThemeContext'

const App = () => {
  const [theme, setTheme] = useState('terminal')
  const value = { theme, setTheme }

  const Styles = styled.div`
    #app {
      width: 100%;
      height: 100%;
      background-color: ${theme === 'dracula' ? '#383a59' : '#00c21a'};
    }

    a,
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    label {
      color: ${theme === 'dracula' ? '#d863bb !important' : '#000 !important'};
      text-align: center;
    }

    .btn-primary:hover,
    .btn-primary:active,
    .btn-primary:focus,
    .nav-link:hover,
    .nav-link:active,
    .nav-link:focus {
      background-color: ${theme === 'dracula'
        ? '#282942 !important'
        : '#00c21a !important'};
      color: ${theme === 'dracula' ? '#d863bb !important' : '#000 !important'};
      border-radius: ${theme === 'dracula'
        ? '20px !important'
        : '0px !important'};
      border: none !important;
    }

    .btn-primary,
    .nav-link {
      background-color: ${theme === 'dracula'
        ? '#d863bb !important'
        : '#000 !important'};
      color: ${theme === 'dracula'
        ? '#282942 !important'
        : '#00c21a !important'};
      border-radius: ${theme === 'dracula' ? '20px' : '0px'};
      border: none !important;
    }

    .card {
      border: 1px solid ${theme === 'dracula' ? '#282943' : '#000'};
    }

    .card-body {
      background-color: ${theme === 'dracula' ? '#282942' : '#008705'};
    }

    .nav-link {
      font-weight: bold;
      margin-left: 6px;
      margin-right: 6px;
    }

    .profile-pic {
      max-width: 300px;
      max-height: 400px;
      width: 100%;
      height: 100%;
      ${theme === 'terminal' ? 'border-radius: 0px !important' : ''}
    }

    .project-card {
      padding: 16px;
    }

    .projects-note {
      font-size: 16px;
    }

    form {
      padding: 16px;
      border: 1px solid rgba(0, 0, 0, 0.175);
      border-radius: 0.375rem;
      background-color: ${theme === 'dracula' ? '#282942' : '#008705'};
    }

    @media screen and (max-width: 768px) {
      .lets-chat {
        margin-bottom: 3em;
      }
    }
  `
  return (
    <ThemeContext.Provider value={value}>
      <Styles>
        <Layout>
          <Router />
        </Layout>
      </Styles>
    </ThemeContext.Provider>
  )
}

export default App
