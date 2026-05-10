import { Box, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import profileImg from '../../assets/alejo.png'

const phrases = [
  { quote: "La luz no se inventa — se espera.", sub: "Sobre la paciencia" },
  { quote: "Cada disparo es una decisión irrevocable.", sub: "Sobre el instante" },
  { quote: "El momento real no se repite. Por eso lo capturo.", sub: "Sobre la presencia" },
  { quote: "Fotografiar es elegir qué merece permanecer.", sub: "Sobre el oficio" },
]

const stats = [
  { value: '5', label: 'Años activo' },
  { value: '3', label: 'Países cubiertos' },
  { value: '∞', label: 'Momentos únicos' },
]

const bioParas = [
  'Me llamo Alejandro Castillo, nacido en 2007. Me especializo en fotografía de bodas y quince años, con un enfoque en capturar momentos reales de forma clara y bien ejecutada.',
  'También cuento con experiencia en fotografía deportiva dentro de la liga profesional de baloncesto colombiano y en la Copa América de Baloncesto, trabajando con precisión para registrar la acción en tiempo real.',
  'A nivel internacional, he participado en conciertos en Estados Unidos, desarrollando diseño gráfico y edición de video. Mi enfoque está en el detalle, la consistencia y mantener un estándar de calidad alto en cada proyecto.',
]

const filosofia = [
  { text: 'Cada galería documenta una historia real con fidelidad a lo ocurrido.', em: false },
  { text: 'Emociones genuinas y momentos irrepetibles registrados con criterio y sensibilidad.', em: true },
  { text: 'Escenas auténticas tratadas con una estética cuidada y coherente.', em: false },
  { text: 'Expresiones naturales, miradas significativas y detalles que aportan valor a la narrativa.', em: true },
  { text: 'Imágenes que conservan su sentido con el paso del tiempo.', em: false },
]

export default function About() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const openLightbox = () => {
    setPhraseIdx((p) => (p + 1) % phrases.length)
    setLightboxOpen(true)
  }

  return (
    <>
      {/* ── Lightbox ── */}
      {lightboxOpen && (
        <Box
          onClick={() => setLightboxOpen(false)}
          sx={{
            position: 'fixed',
            inset: 0,
            zIndex: 1300,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            gap: { xs: 3, sm: 6 },
            px: { xs: 3, sm: 6, md: 10 },
            backdropFilter: 'blur(20px) brightness(0.18)',
            backgroundColor: 'rgba(0,0,0,0.6)',
            animation: 'fadeIn 0.4s ease',
            '@keyframes fadeIn': { from: { opacity: 0 }, to: { opacity: 1 } },
          }}
        >
          <Box
            onClick={(e) => e.stopPropagation()}
            sx={{
              width: { xs: '60vw', sm: '28vw' },
              maxWidth: 300,
              overflow: 'hidden',
              boxShadow: '0 40px 120px rgba(0,0,0,0.9)',
              animation: 'slideUp 0.5s cubic-bezier(0.16,1,0.3,1)',
              '@keyframes slideUp': {
                from: { opacity: 0, transform: 'translateY(20px) scale(0.95)' },
                to: { opacity: 1, transform: 'translateY(0) scale(1)' },
              },
            }}
          >
            <Box
              component="img"
              src={profileImg}
              alt="Alejandro Castillo"
              sx={{ width: '100%', height: { xs: '72vw', sm: '38vw' }, maxHeight: 440, objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
            />
          </Box>

          <Box
            onClick={(e) => e.stopPropagation()}
            sx={{
              maxWidth: 300,
              animation: 'slideIn 0.55s cubic-bezier(0.16,1,0.3,1) 0.08s both',
              '@keyframes slideIn': {
                from: { opacity: 0, transform: 'translateX(20px)' },
                to: { opacity: 1, transform: 'translateX(0)' },
              },
            }}
          >
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.3)', letterSpacing: '0.25em', textTransform: 'uppercase', fontSize: '0.55rem', display: 'block', mb: 2.5 }}>
              {phrases[phraseIdx].sub}
            </Typography>
            <Typography sx={{ fontFamily: '"Cormorant Garamond", serif', fontSize: { xs: '1.5rem', md: '2.2rem' }, fontWeight: 300, fontStyle: 'italic', color: '#fff', lineHeight: 1.35, mb: 3.5 }}>
              "{phrases[phraseIdx].quote}"
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
              <Box sx={{ width: 24, height: '1px', backgroundColor: 'rgba(255,255,255,0.25)' }} />
              <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.35)', letterSpacing: '0.15em', fontSize: '0.6rem' }}>A. Castillo</Typography>
            </Box>
            <Typography
              onClick={() => setLightboxOpen(false)}
              variant="caption"
              sx={{ color: 'rgba(255,255,255,0.22)', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.55rem', cursor: 'pointer', transition: 'color 0.2s', '&:hover': { color: 'rgba(255,255,255,0.6)' } }}
            >
              ← cerrar
            </Typography>
          </Box>
        </Box>
      )}

      {/* ── Sección principal ── */}
      <Box
        component="section"
        id="sobre-mi"
        sx={{
          px: { xs: 3, sm: 5, md: 7, lg: 10 },
          py: { xs: 8, md: 14 },
          backgroundColor: 'background.default',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Número decorativo */}
        <Typography
          sx={{
            position: 'absolute',
            top: 40,
            right: { xs: -20, md: 20 },
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: { xs: '9rem', md: '15rem' },
            fontWeight: 700,
            color: 'rgba(255,255,255,0.022)',
            lineHeight: 1,
            userSelect: 'none',
            pointerEvents: 'none',
            letterSpacing: '-0.05em',
          }}
        >
          03
        </Typography>

        {/* Layout principal: flexbox en lugar de Grid para control total */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: 6, sm: 5, md: 8 },
            alignItems: 'flex-start',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* ── Columna izquierda: imagen ── */}
          <Box
            sx={{
              flexShrink: 0,
              width: { xs: '100%', sm: '42%', md: '38%', lg: '35%' },
              maxWidth: { xs: '100%', sm: 380 },
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(28px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease',
            }}
          >
            {/* Foto con bordes difuminados */}
            <Box
              onClick={openLightbox}
              sx={{
                position: 'relative',
                width: '100%',
                cursor: 'pointer',
                WebkitMaskImage: 'radial-gradient(ellipse 86% 88% at 50% 50%, black 50%, transparent 100%)',
                maskImage: 'radial-gradient(ellipse 86% 88% at 50% 50%, black 50%, transparent 100%)',
                '&:hover .hover-overlay': { opacity: 1 },
                '&:hover img': { transform: 'scale(1.04)' },
              }}
            >
              <Box
                component="img"
                src={profileImg}
                alt="Alejandro Castillo"
                sx={{
                  width: '100%',
                  height: { xs: '90vw', sm: '52vw', md: '46vw', lg: '38vw' },
                  maxHeight: 540,
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block',
                  filter: 'grayscale(10%) contrast(1.06)',
                  transition: 'transform 0.7s cubic-bezier(0.4,0,0.2,1)',
                }}
              />

              {/* Hover overlay */}
              <Box
                className="hover-overlay"
                sx={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: 1.5,
                  background: 'rgba(0,0,0,0.28)',
                  opacity: 0,
                  transition: 'opacity 0.35s ease',
                }}
              >
                <Box sx={{ width: 42, height: 42, border: '1px solid rgba(255,255,255,0.65)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography sx={{ color: '#fff', fontSize: '1.2rem', lineHeight: 1 }}>+</Typography>
                </Box>
                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.57rem' }}>
                  Ver frase
                </Typography>
              </Box>

              {/* Nombre sobre la foto */}
              <Box sx={{ position: 'absolute', bottom: '13%', left: '9%' }}>
                <Typography sx={{ fontFamily: '"Cormorant Garamond", serif', fontSize: { xs: '1.1rem', md: '1.2rem' }, fontWeight: 500, color: '#fff', lineHeight: 1.2 }}>
                  Alejandro Castillo
                </Typography>
                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.38)', letterSpacing: '0.16em', textTransform: 'uppercase', fontSize: '0.54rem' }}>
                  Fotógrafo · 2007
                </Typography>
              </Box>
            </Box>

            {/* Stats */}
            <Box sx={{ display: 'flex', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', py: 2.5, mt: 1 }}>
              {stats.map((stat, i) => (
                <Box key={stat.label} sx={{ flex: 1, textAlign: 'center', borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                  <Typography sx={{ fontFamily: '"Cormorant Garamond", serif', fontSize: { xs: '1.7rem', md: '2rem' }, fontWeight: 300, color: '#fff', lineHeight: 1, mb: 0.5 }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.52rem', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* ── Columna derecha: texto ── */}
          <Box
            sx={{
              flex: 1,
              minWidth: 0,
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(28px)',
              transition: 'opacity 0.9s ease 0.18s, transform 0.9s ease 0.18s',
            }}
          >
            {/* Label */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3.5 }}>
              <Box sx={{ width: 20, height: '1px', backgroundColor: 'rgba(255,255,255,0.18)' }} />
              <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.28)', letterSpacing: '0.22em', textTransform: 'uppercase', fontSize: '0.56rem' }}>
                03 — Sobre mí
              </Typography>
            </Box>

            {/* Título */}
            <Typography
              sx={{
                mb: 5,
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: { xs: '2.4rem', sm: '2.6rem', md: '3.2rem', lg: '3.8rem' },
                fontWeight: 400,
                letterSpacing: '-0.02em',
                lineHeight: 1.06,
                color: '#fff',
              }}
            >
              Una visión,<br />
              <Box component="em" sx={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.28)', fontWeight: 300 }}>
                mil historias
              </Box>
            </Typography>

            {/* Bio */}
            {bioParas.map((para, i) => (
              <Typography
                key={i}
                sx={{ color: 'rgba(255,255,255,0.5)', mb: 2.5, lineHeight: 1.88, fontSize: { xs: '0.88rem', md: '0.93rem' } }}
              >
                {para}
              </Typography>
            ))}

            {/* Separador */}
            <Box sx={{ my: 5, height: '1px', background: 'linear-gradient(to right, rgba(255,255,255,0.1) 0%, transparent 80%)' }} />

            {/* Filosofía */}
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.16)', letterSpacing: '0.26em', textTransform: 'uppercase', fontSize: '0.54rem', display: 'block', mb: 3.5 }}>
              Filosofía
            </Typography>

            <Box>
              {filosofia.map((item, i) => (
                <Box
                  key={i}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 2.5,
                    py: 2,
                    px: 1,
                    borderBottom: i < filosofia.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                    transition: 'background 0.25s, padding-left 0.25s',
                    '&:hover': { background: 'rgba(255,255,255,0.02)', pl: 2 },
                  }}
                >
                  <Typography sx={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '0.62rem', color: 'rgba(255,255,255,0.15)', mt: 0.35, minWidth: 16, flexShrink: 0 }}>
                    {String(i + 1).padStart(2, '0')}
                  </Typography>
                  <Typography
                    sx={{
                      color: item.em ? 'rgba(255,255,255,0.68)' : 'rgba(255,255,255,0.32)',
                      fontStyle: item.em ? 'italic' : 'normal',
                      fontFamily: item.em ? '"Cormorant Garamond", serif' : 'inherit',
                      fontSize: item.em ? { xs: '0.97rem', md: '1.02rem' } : { xs: '0.81rem', md: '0.84rem' },
                      lineHeight: 1.7,
                    }}
                  >
                    {item.text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}