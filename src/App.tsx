import { ThemeProvider, createTheme } from "@mui/material/styles"
import { CssBaseline } from "@mui/material"
import Home from "./assets/pages/Home"

const darkTheme = createTheme({
  palette: {
    mode: "dark"
  }
})

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  )
}

export default App