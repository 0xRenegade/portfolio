import { createContext } from 'react'

const ThemeContext = createContext({
  theme: 'terminal',
  setTheme: () => {},
})

export default ThemeContext
