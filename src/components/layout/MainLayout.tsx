import { Box } from '@mui/material'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <Box
      component="main"
      sx={{
        minHeight: '100vh',
        backgroundColor: 'background.default',
        color: 'text.primary',
      }}
    >
      <Navbar />
      {children}
      <Footer />
    </Box>
  )
}