import { Box, Typography, Grid } from '@mui/material'
import profileImg from '../../assets/IMG_0645.jpg'

export default function About() {
  return (
    <Box
      component="section"
      id="sobre-mi"
      sx={{ px: { xs: 3, md: 8 }, py: { xs: 10, md: 16 }, backgroundColor: 'background.default' }}
    >
      <Grid container spacing={{ xs: 6, md: 12 }} alignItems="center">
        {/* Imagen */}
        <Grid item xs={12} md={5}>
  <Box
    sx={{
      width: '100%',
      maxWidth: 380,
      mx: 'auto',
      overflow: 'hidden',
    }}
  >
    <Box
      component="img"
      src={profileImg}
      alt="Fotografía de perfil"
      sx={{
        width: '100%',
        height: 500,
        objectFit: 'cover',
        objectPosition: 'center top',
        display: 'block',
      }}
    />
  </Box>
</Grid>

        {/* Texto */}
        <Grid item xs={12} md={7}>
          <Typography variant="caption" display="block" sx={{ color: 'secondary.main', mb: 2 }}>
            03 — Sobre mí
          </Typography>
          <Typography variant="h2" sx={{ mb: 5 }}>
            Una visión,<br />
            <Box component="em" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>mil historias</Box>
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
            Con más de una década detrás del lente, he aprendido que la fotografía no se trata de la cámara — se trata de la conexión entre el fotógrafo y el momento que está a punto de desaparecer.
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 6 }}>
            Trabajo con luz natural siempre que es posible, y con una dirección suave que saca lo mejor de cada persona sin que se sienta forzada.
          </Typography>

          <Grid container spacing={4}>
            {[
              { value: '+10', label: 'Años de experiencia' },
              { value: '+500', label: 'Sesiones realizadas' },
              { value: '+12', label: 'Países fotografiados' },
            ].map((stat) => (
              <Grid item xs={4} key={stat.label}>
                <Typography
                  sx={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: { xs: '2rem', md: '2.8rem' },
                    fontWeight: 300,
                    color: 'text.primary',
                    lineHeight: 1,
                    mb: 1,
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {stat.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}