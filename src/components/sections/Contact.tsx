import { Box, Typography, Grid, TextField, Button, Stack } from '@mui/material'

export default function Contact() {
  return (
    <Box
      component="section"
      id="contacto"
      sx={{ px: { xs: 3, md: 8 }, py: { xs: 10, md: 16 }, backgroundColor: 'background.paper' }}
    >
      <Grid container spacing={{ xs: 6, md: 12 }}>
        {/* Info */}
        <Grid item xs={12} md={5}>
          <Typography variant="caption" display="block" sx={{ color: 'secondary.main', mb: 2 }}>
            04 — Contacto
          </Typography>
          <Typography variant="h2" sx={{ mb: 5 }}>
            Hablemos de<br />
            <Box component="em" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>tu proyecto</Box>
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 6 }}>
            Cuéntame sobre tu sesión, evento o proyecto. Respondo en menos de 24 horas.
          </Typography>

          <Stack spacing={3}>
            {[
              { label: 'Email', value: 'hola@fotografo.co' },
              { label: 'WhatsApp', value: '+57 300 000 0000' },
              { label: 'Instagram', value: '@fotografo' },
            ].map((item) => (
              <Box key={item.label}>
                <Typography variant="caption" sx={{ color: 'secondary.main', display: 'block', mb: 0.5 }}>
                  {item.label}
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.primary' }}>
                  {item.value}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Grid>

        {/* Formulario */}
        <Grid item xs={12} md={7}>
          <Stack spacing={3}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Nombre"
                  variant="outlined"
                  sx={inputStyles}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  variant="outlined"
                  sx={inputStyles}
                />
              </Grid>
            </Grid>
            <TextField
              fullWidth
              label="Tipo de sesión"
              variant="outlined"
              sx={inputStyles}
            />
            <TextField
              fullWidth
              label="Mensaje"
              multiline
              rows={5}
              variant="outlined"
              sx={inputStyles}
            />
            <Button
              variant="outlined"
              size="large"
              sx={{
                alignSelf: 'flex-start',
                borderColor: 'primary.main',
                color: 'primary.main',
                px: 6,
                py: 1.5,
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: 'background.default',
                },
              }}
            >
              Enviar mensaje
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}

const inputStyles = {
  '& .MuiOutlinedInput-root': {
    borderRadius: 0,
    '& fieldset': { borderColor: 'rgba(232,224,213,0.15)' },
    '&:hover fieldset': { borderColor: 'rgba(232,224,213,0.3)' },
    '&.Mui-focused fieldset': { borderColor: 'primary.main' },
  },
  '& .MuiInputLabel-root': { color: 'text.secondary' },
  '& .MuiOutlinedInput-input': { color: 'text.primary' },
}