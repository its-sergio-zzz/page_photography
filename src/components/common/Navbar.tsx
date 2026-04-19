import { useState, useEffect } from 'react'
import {
  AppBar, Toolbar, Box, Button, IconButton,
  Drawer, List, ListItem, ListItemButton,
  useMediaQuery, useTheme,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

const NAV_LINKS = [
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: scrolled ? 'rgba(8,8,8,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(232,224,213,0.08)' : 'none',
          transition: 'all 0.4s ease',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '120px',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 100%)',
            pointerEvents: 'none',
            opacity: scrolled ? 0 : 1,
            transition: 'opacity 0.4s ease',
          },
        }}
      >
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            px: { xs: 3, md: 6 },
            py: 2,
            minHeight: { xs: '64px', md: '80px' },
          }}
        >
          <Box
            component="a"
            href="#"
            sx={{
              textDecoration: 'none',
              color: 'white',
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 400,
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              textShadow: '0 1px 8px rgba(0,0,0,0.8)',
              position: 'relative',
              zIndex: 1,
            }}
          >
            Fotógrafo
          </Box>

          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 1, position: 'relative', zIndex: 1 }}>
              {NAV_LINKS.map((link) => (
                <Button
                  key={link.label}
                  href={link.href}
                  sx={{
                    color: 'rgba(255,255,255,0.9)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    textShadow: '0 1px 6px rgba(0,0,0,0.8)',
                    '&:hover': { color: 'white' },
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Box>
          )}

          {isMobile && (
            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{
                color: 'white',
                position: 'relative',
                zIndex: 1,
                filter: 'drop-shadow(0 1px 4px rgba(0,0,0,0.8))',
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: 'background.default',
            width: '75vw',
            maxWidth: 320,
            borderLeft: '1px solid rgba(232,224,213,0.08)',
          },
        }}
      >
        <Box sx={{ p: 3, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: 'text.primary' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ px: 3 }}>
          {NAV_LINKS.map((link) => (
            <ListItem key={link.label} disablePadding>
              <ListItemButton
                href={link.href}
                onClick={() => setDrawerOpen(false)}
                sx={{
                  py: 2,
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '1.5rem',
                  fontWeight: 300,
                  letterSpacing: '0.08em',
                  color: 'text.primary',
                  borderBottom: '1px solid rgba(232,224,213,0.06)',
                  '&:hover': { backgroundColor: 'transparent', color: 'primary.dark' },
                }}
              >
                {link.label}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  )
}