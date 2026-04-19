import { useState, useEffect } from 'react'
import { Box, Typography, Button, Stack } from '@mui/material'

import slide1 from '../../assets/IMG_0861.jpg'
import slide2 from '../../assets/DSC06190.jpg'
import slide3 from '../../assets/DSC06186.jpg'

const SLIDES = [slide1, slide2, slide3]
const INTERVAL = 5000

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const [transitioning, setTransitioning] = useState(false)

  const goTo = (index: number) => {
    if (transitioning || index === current) return
    setPrev(current)
    setTransitioning(true)
    setCurrent(index)
    setTimeout(() => {
      setPrev(null)
      setTransitioning(false)
    }, 1000)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % SLIDES.length)
    }, INTERVAL)
    return () => clearInterval(timer)
  }, [current, transitioning])

  return (
    <Box
      component="section"
      id="hero"
      sx={{
        position: 'relative',
        height: '100vh',
        minHeight: 600,
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
      }}
    >
      {/* Slide anterior (sale con fade out) */}
      {prev !== null && (
        <Box
          component="img"
          src={SLIDES[prev]}
          alt=""
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            opacity: 0,
            transition: 'opacity 1s ease',
          }}
        />
      )}

      {/* Slide actual (entra con fade in) */}
      {SLIDES.map((src, i) => (
        <Box
          key={src}
          component="img"
          src={src}
          alt={`Slide ${i + 1}`}
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            opacity: i === current ? 1 : 0,
            transition: 'opacity 1s ease',
            zIndex: i === current ? 1 : 0,
          }}
        />
      ))}

      {/* Gradiente */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          background:
            'linear-gradient(to top, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0.35) 50%, rgba(8,8,8,0.1) 100%)',
        }}
      />

      {/* Contenido */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 3,
          px: { xs: 4, md: 10 },
          pb: { xs: 8, md: 12 },
          maxWidth: 900,
        }}
      >
        <Typography variant="caption" display="block" sx={{ mb: 3, color: 'secondary.main' }}>
          Fotografía · Bogotá, Colombia
        </Typography>

        <Typography variant="h1" sx={{ mb: 4 }}>
          Momentos<br />
          <Box component="em" sx={{ fontStyle: 'italic', color: 'primary.dark' }}>
            que perduran
          </Box>
        </Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 5 }}>
          <Button
            variant="outlined"
            href="#portfolio"
            sx={{
              borderColor: 'primary.main',
              color: 'primary.main',
              '&:hover': {
                backgroundColor: 'primary.main',
                color: 'background.default',
              },
            }}
          >
            Ver Portfolio
          </Button>
          <Button
            href="#contacto"
            sx={{
              color: 'text.secondary',
              '&:hover': { color: 'text.primary' },
            }}
          >
            Agendar sesión →
          </Button>
        </Stack>
      </Box>

      {/* Dots navegación */}
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: 32, md: 48 },
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          display: 'flex',
          gap: 1.5,
        }}
      >
        {SLIDES.map((_, i) => (
          <Box
            key={i}
            onClick={() => goTo(i)}
            sx={{
              width: i === current ? 32 : 8,
              height: 2,
              backgroundColor:
                i === current
                  ? 'primary.main'
                  : 'rgba(232,224,213,0.3)',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
            }}
          />
        ))}
      </Box>

      {/* Indicador scroll */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 40,
          right: { xs: 24, md: 60 },
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Typography
          variant="caption"
          sx={{ color: 'text.disabled', writingMode: 'vertical-rl' }}
        >
          scroll
        </Typography>
        <Box
          sx={{
            width: 1,
            height: 60,
            backgroundColor: 'rgba(232,224,213,0.2)',
          }}
        />
      </Box>
    </Box>
  )
}