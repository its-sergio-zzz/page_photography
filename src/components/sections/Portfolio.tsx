import { Box, Typography, ImageList, ImageListItem } from '@mui/material'
import { useMediaQuery, useTheme } from '@mui/material'
import { galleryImages } from '../../constants/galleryData'

export default function Portfolio() {
  const theme = useTheme()
  const isXs = useMediaQuery(theme.breakpoints.down('sm'))
  const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'))

  const cols = isXs ? 1 : isSm ? 2 : 4

  return (
    <Box
      component="section"
      id="portfolio"
      sx={{
        px: { xs: 2, md: 4 },
        py: { xs: 10, md: 16 },
        backgroundColor: 'background.default',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          mb: { xs: 6, md: 10 },
          px: { xs: 2, md: 4 },
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        <Box>
          <Typography variant="caption" display="block" sx={{ color: 'secondary.main', mb: 2 }}>
            01 — Portfolio
          </Typography>
          <Typography variant="h2">
            Trabajo<br />
            <Box component="em" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
              seleccionado
            </Box>
          </Typography>
        </Box>
        <Typography variant="body2" sx={{ color: 'text.secondary', maxWidth: 320 }}>
          Una selección de proyectos que capturan la esencia de cada momento, cada luz, cada historia.
        </Typography>
      </Box>

      {/* Masonry grid */}
      <ImageList
        variant="masonry"
        cols={cols}
        gap={8}
      >
        {galleryImages.map((img) => (
          <ImageListItem
            key={img.id}
            sx={{
              overflow: 'hidden',
              cursor: 'pointer',
              '& img': {
                display: 'block',
                width: '100%',
                transition: 'transform 0.5s ease, filter 0.5s ease',
                filter: 'brightness(0.92)',
              },
              '&:hover img': {
                transform: 'scale(1.03)',
                filter: 'brightness(1)',
              },
            }}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  )
}