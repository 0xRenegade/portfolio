import { Router } from './router'
import { Layout } from './components'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'

const App = () => {
  return (
    <Layout>
      <Router />
    </Layout>
  )
}

export default App
