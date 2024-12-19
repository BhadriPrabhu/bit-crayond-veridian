import './App.css'
import Screen1 from './Screens'
import { Grid, ThemeProvider } from '@mui/material'
import { lightTheme } from './Theme'
import { BrowserRouter } from 'react-router-dom'
// import RouterApp from './Routers'

function App() {

  return (
    <Grid>
      <BrowserRouter>
        <ThemeProvider theme={lightTheme}>
          <Screen1 />
          {/* <RouterApp/> */}
          {/* <Outlet /> */}
        </ThemeProvider>
      </BrowserRouter>
    </Grid>

  )
}

export default App;
