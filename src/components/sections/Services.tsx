import { Box, Typography, Grid, Divider } from '@mui/material'

const SERVICES = [
  { number: '01', title: 'Retratos', description: 'Sesiones individuales y de pareja en locación o estudio. Capturamos tu esencia con luz natural y dirección profesional.' },
  { number: '02', title: 'Eventos', description: 'Bodas, grados, corporativos. Cobertura completa del día con entrega de galería digital de alta resolución.' },
  { number: '03', title: 'Editorial', description: 'Fotografía para marcas, productos y medios. Concepto, producción y postproducción incluidos.' },
  { number: '04', title: 'Fine Art', description: 'Proyectos artísticos a medida. Impresiones de museo disponibles en edición limitada.' },
]

export default function Services() {
  return (
    <Box
      component="section"
      id="servicios"
      sx={{ px: { xs: 3, md: 8 }, py: { xs: 10, md: 16 }, backgroundColor: 'background.paper' }}
    >
      <Box sx={{ mb: { xs: 6, md: 10 } }}>
        <Typography variant="caption" display="block" sx={{ color: 'secondary.main', mb: 2 }}>
          02 — Servicios
        </Typography>
        <Typography variant="h2">
          ¿Qué<br />
          <Box component="em" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>ofrezco?</Box>
        </Typography>
      </Box>

      <Grid container>
        {SERVICES.map((service, index) => (
          <Grid item xs={12} md={6} key={service.number}>
            <Box
              sx={{
                p: { xs: 4, md: 6 },
                borderTop: '1px solid',
                borderRight: { md: index % 2 === 0 ? '1px solid' : 'none' },
                borderColor: 'divider',
                height: '100%',
                transition: 'background-color 0.3s ease',
                '&:hover': { backgroundColor: 'rgba(232,224,213,0.02)' },
              }}
            >
              <Typography variant="caption" sx={{ color: 'secondary.main', display: 'block', mb: 3 }}>
                {service.number}
              </Typography>
              <Typography variant="h3" sx={{ mb: 3 }}>
                {service.title}
              </Typography>
              <Divider sx={{ mb: 3, borderColor: 'divider' }} />
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {service.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}