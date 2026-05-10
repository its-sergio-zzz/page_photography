import { ThemeProvider, CssBaseline } from '@mui/material'
import { theme } from './theme/theme'
import MainLayout from './components/layout/MainLayout'
import Hero from './components/sections/Hero'
import Portfolio from './components/sections/Portfolio'
import Services from './components/sections/Services'
import About from './components/sections/About'
import Contact from './components/sections/Contact'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainLayout>
        <Hero />
        <Portfolio />
        <Services />
        <About />
        <Contact />
      </MainLayout>
    </ThemeProvider>
  )
}

export default App