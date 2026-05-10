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
            Alejandro Castillo | Fotógrafo de Eventos
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
            Fotografía profesional · Colombia
          </Typography>
        </Box>

        

        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
          © {new Date().getFullYear()} Alejandro Castillo. Todos los derechos reservados. 
        </Typography>
      </Stack>
    </Box>
  )
}