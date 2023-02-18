import { Router } from './router'
import { Layout } from './components'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import Styles from './Styles'

const App = () => {
  return (
    <Styles>
      <Layout>
        <Router />
      </Layout>
    </Styles>
  )
}

export default App
