import { Box, Typography } from '@mui/material'
import { useState, useEffect, useCallback } from 'react'
import { galleryImages } from '../../constants/galleryData'

const QUOTES = [
  { text: "Cada disparo es una decisión irrevocable.", author: "A. Castillo" },
  { text: "La luz no se captura, se conquista.", author: "A. Castillo" },
  { text: "Un segundo de verdad vale más que horas de pose.", author: "A. Castillo" },
  { text: "Fotografiar es aprender a ver antes de mirar.", author: "A. Castillo" },
  { text: "El silencio entre dos risas también tiene forma.", author: "A. Castillo" },
  { text: "No congelo el tiempo, lo preservo.", author: "A. Castillo" },
  { text: "Cada imagen es una promesa cumplida.", author: "A. Castillo" },
  { text: "La cámara no miente, pero sí sabe guardar secretos.", author: "A. Castillo" },
  { text: "Busco el instante justo antes del recuerdo.", author: "A. Castillo" },
  { text: "Una buena foto huele, pesa y tiene temperatura.", author: "A. Castillo" },
  { text: "El encuadre es mi forma de decir lo que no cabe en palabras.", author: "A. Castillo" },
  { text: "Fotografío lo que el ojo ve y el corazón siente.", author: "A. Castillo" },
  { text: "La imperfección bien vista se convierte en arte.", author: "A. Castillo" },
  { text: "Cada evento tiene una imagen que lo define todo.", author: "A. Castillo" },
  { text: "El mejor momento siempre está a punto de suceder.", author: "A. Castillo" },
  { text: "Ver es fácil. Mostrar, es el trabajo.", author: "A. Castillo" },
  { text: "La fotografía es memoria con nombre propio.", author: "A. Castillo" },
  { text: "Prefiero una emoción borrosa a una técnica fría.", author: "A. Castillo" },
  { text: "El fondo importa tanto como lo que está en foco.", author: "A. Castillo" },
  { text: "Cada sesión me recuerda por qué elegí este oficio.", author: "A. Castillo" },
]

const EAGER_COUNT = 6

export default function Portfolio() {
  const [selected, setSelected] = useState<number | null>(null)
  const [visible, setVisible] = useState(false)
  const [closing, setClosing] = useState(false)
  const [quoteIdx, setQuoteIdx] = useState(0)

  const openLightbox = (id: number, idx: number) => {
    setSelected(id)
    setQuoteIdx(idx % QUOTES.length)
    setTimeout(() => setVisible(true), 10)
  }

  const closeLightbox = useCallback(() => {
    setClosing(true)
    setVisible(false)
    setTimeout(() => {
      setSelected(null)
      setClosing(false)
    }, 400)
  }, [])

  const navigate = useCallback((dir: 1 | -1) => {
    if (selected === null) return
    const idx = galleryImages.findIndex(i => i.id === selected)
    const nextIdx = (idx + dir + galleryImages.length) % galleryImages.length
    setSelected(galleryImages[nextIdx].id)
    setQuoteIdx(nextIdx % QUOTES.length)
  }, [selected])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (selected === null) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') navigate(1)
      if (e.key === 'ArrowLeft') navigate(-1)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [selected, closeLightbox, navigate])

  useEffect(() => {
    document.body.style.overflow = selected !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selected])

  const activeImg = galleryImages.find(i => i.id === selected)
  const activeIdx = galleryImages.findIndex(i => i.id === selected)
  const quote = QUOTES[quoteIdx]

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
      {/* ── Header ── */}
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
          <Typography variant="caption" sx={{ display: 'block', color: 'secondary.main', mb: 2 }}>
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
          Imágenes que no buscan ser perfectas — buscan ser verdaderas.
          Cada encuadre, una historia que merece quedarse.
        </Typography>
      </Box>

      {/* ── Masonry fluid columns ── */}
      <Box
        sx={{
          columns: { xs: 1, sm: 2, md: 3 },
          columnGap: '10px',
          px: { xs: 0, md: 0 },
        }}
      >
        {galleryImages.map((img, globalIdx) => {
          const isEager = globalIdx < EAGER_COUNT
          return (
            <Box
              key={img.id}
              onClick={() => openLightbox(img.id, globalIdx)}
              sx={{
                display: 'inline-block',
                width: '100%',
                breakInside: 'avoid',
                mb: '10px',
                overflow: 'hidden',
                cursor: 'pointer',
                position: 'relative',
                lineHeight: 0,
                backgroundColor: 'rgba(255,255,255,0.04)',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 55%)',
                  opacity: 0,
                  transition: 'opacity 0.4s ease',
                },
                '&:hover::after': { opacity: 1 },
                '& img': {
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  transition: 'transform 0.6s cubic-bezier(0.4,0,0.2,1), filter 0.4s ease',
                  filter: 'brightness(0.88) saturate(0.93)',
                },
                '&:hover img': {
                  transform: 'scale(1.04)',
                  filter: 'brightness(1) saturate(1)',
                },
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading={isEager ? 'eager' : 'lazy'}
                decoding="async"
                fetchPriority={isEager ? 'high' : 'low'}
              />
            </Box>
          )
        })}
      </Box>

      {/* ── Lightbox ── */}
      {(selected !== null || closing) && (
        <Box
          onClick={closeLightbox}
          sx={{
            position: 'fixed',
            inset: 0,
            zIndex: 1400,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.96)',
            backdropFilter: 'blur(20px)',
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.4s ease',
          }}
        >
          {activeImg && (
            <Box
              onClick={e => e.stopPropagation()}
              sx={{
                position: 'relative',
                maxWidth: { xs: '92vw', md: '52vw' },
                maxHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Box
                component="img"
                src={activeImg.src}
                alt={activeImg.alt}
                sx={{
                  width: '100%',
                  maxHeight: '75vh',
                  objectFit: 'contain',
                  display: 'block',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'scale(1)' : 'scale(0.96)',
                  transition: 'opacity 0.35s ease, transform 0.35s ease',
                  boxShadow: '0 40px 100px rgba(0,0,0,0.7)',
                }}
              />
              <Typography
                sx={{
                  mt: 2,
                  textAlign: 'center',
                  color: 'rgba(255,255,255,0.2)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                }}
              >
                {activeIdx + 1} &nbsp;/&nbsp; {galleryImages.length}
              </Typography>
            </Box>
          )}

          {/* Panel lateral con quote */}
          <Box
            onClick={e => e.stopPropagation()}
            sx={{
              position: 'absolute',
              right: { xs: 'auto', md: '5vw' },
              bottom: { xs: '5vh', md: 'auto' },
              left: { xs: '50%', md: 'auto' },
              transform: { xs: 'translateX(-50%)', md: 'none' },
              display: 'flex',
              flexDirection: 'column',
              gap: 2.5,
              maxWidth: { xs: 260, md: 230 },
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.5s ease 0.15s',
            }}
          >
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.16)',
                fontSize: '0.5rem',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
              }}
            >
              Sobre el instante
            </Typography>
            <Typography
              sx={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: { xs: '1.25rem', md: '1.55rem' },
                fontStyle: 'italic',
                fontWeight: 300,
                color: 'rgba(255,255,255,0.85)',
                lineHeight: 1.45,
              }}
            >
              "{quote.text}"
            </Typography>
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.25)',
                fontSize: '0.56rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                '&::before': {
                  content: '""',
                  display: 'inline-block',
                  width: 24,
                  height: '1px',
                  backgroundColor: 'rgba(255,255,255,0.18)',
                },
              }}
            >
              {quote.author}
            </Typography>
            <Box
              onClick={closeLightbox}
              sx={{
                mt: 1,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                cursor: 'pointer',
                color: 'rgba(255,255,255,0.25)',
                fontSize: '0.56rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                width: 'fit-content',
                transition: 'color 0.2s ease',
                '&:hover': { color: 'rgba(255,255,255,0.65)' },
              }}
            >
              <Box component="span">←</Box>
              Cerrar
            </Box>
          </Box>

          {/* Flechas */}
          {(['left', 'right'] as const).map((side) => (
            <Box
              key={side}
              onClick={e => { e.stopPropagation(); navigate(side === 'right' ? 1 : -1) }}
              sx={{
                position: 'absolute',
                top: '50%',
                [side]: { xs: 10, md: 28 },
                transform: 'translateY(-50%)',
                color: 'rgba(255,255,255,0.18)',
                fontSize: '1.3rem',
                cursor: 'pointer',
                px: 1.5,
                py: 2,
                userSelect: 'none',
                transition: 'color 0.2s ease',
                '&:hover': { color: 'rgba(255,255,255,0.65)' },
              }}
            >
              {side === 'left' ? '←' : '→'}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  )
}