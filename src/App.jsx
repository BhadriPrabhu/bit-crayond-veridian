import './App.css'
import Screen1 from './Screens'
import { ThemeProvider } from '@mui/material'
import { lightTheme } from './Theme'

function App() {

  return (
    <ThemeProvider theme={lightTheme}>
      <Screen1/>
    </ThemeProvider>
  )
}

export default App
