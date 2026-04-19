import { Box, Typography, Stack, IconButton } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'background.default',
        borderTop: '1px solid',
        borderColor: 'divider',
        px: { xs: 4, md: 10 },
        py: 6,
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems={{ xs: 'flex-start', md: 'center' }}
        spacing={3}
      >
        <Box>
          <Typography
            sx={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '1.1rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'text.primary',
            }}
          >
            Fotógrafo
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
            Fotografía profesional · Colombia
          </Typography>
        </Box>

        <Stack direction="row" spacing={1}>
          <IconButton href="https://instagram.com" target="_blank" sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}>
            <InstagramIcon fontSize="small" />
          </IconButton>
          <IconButton href="https://wa.me/" target="_blank" sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}>
            <WhatsAppIcon fontSize="small" />
          </IconButton>
        </Stack>

        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
          © {new Date().getFullYear()} Fotógrafo. Todos los derechos reservados.
        </Typography>
      </Stack>
    </Box>
  )
}