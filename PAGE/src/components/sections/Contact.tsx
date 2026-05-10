import { Box, Typography } from '@mui/material'
import { useState, useEffect, useRef } from 'react'

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, inView }
}

const WhatsAppIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
)

const channels = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    handle: '+57 311 441 4381',
    sub: 'Respuesta rápida garantizada',
    cta: 'Escribir ahora',
    href: 'https://wa.me/+573114414381',
    Icon: WhatsAppIcon,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    handle: '@alejandrocastill_b',
    sub: 'Portfolio y detrás de cámaras',
    cta: 'Ver perfil',
    href: 'https://www.instagram.com/alejandrocastill_b/',
    Icon: InstagramIcon,
  },
  {
    id: 'instagram_deportes',
    label: 'Instagram',
    handle: '@alejandromedia.co',
    sub: '🏀 Fotografía de eventos deportivos',
    cta: 'Ver perfil',
    href: 'https://www.instagram.com/alejandromedia.co?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    Icon: InstagramIcon,
  },
]

export default function Contact() {
  const { ref: sectionRef, inView } = useInView(0.08)
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <Box
      component="section"
      id="contacto"
      sx={{
        backgroundColor: 'background.paper',
        position: 'relative',
        overflow: 'hidden',
        minHeight: { md: '80vh' },
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        ref={sectionRef}
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          px: { xs: 3, sm: 5, md: 7, lg: 9 },
          py: { xs: 8, md: 12 },
          minHeight: { md: '80vh' },
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Label */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3.5 }}>
          <Box sx={{ width: 20, height: '1px', backgroundColor: 'rgba(255,255,255,0.18)' }} />
          <Typography
            variant="caption"
            sx={{
              color: 'rgba(255,255,255,0.28)',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              fontSize: '0.55rem',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',
            }}
          >
            04 — Contacto
          </Typography>
        </Box>

        {/* Título */}
        <Box
          sx={{
            mb: 3,
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(22px)',
            transition: 'opacity 0.7s ease 0.18s, transform 0.7s ease 0.18s',
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: { xs: '2.8rem', sm: '3.5rem', md: '4rem', lg: '5rem' },
              fontWeight: 400,
              lineHeight: 0.97,
              letterSpacing: '-0.025em',
              color: '#fff',
            }}
          >
            Hablemos de
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: { xs: '2.8rem', sm: '3.5rem', md: '4rem', lg: '5rem' },
              fontWeight: 300,
              fontStyle: 'italic',
              lineHeight: 0.97,
              letterSpacing: '-0.025em',
              color: 'rgba(255,255,255,0.28)',
            }}
          >
            tu proyecto
          </Typography>
        </Box>

        {/* Descripción + badge */}
        <Box
          sx={{
            mb: 6,
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(18px)',
            transition: 'opacity 0.7s ease 0.26s, transform 0.7s ease 0.26s',
          }}
        >
          <Typography
            sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', lineHeight: 1.8, mb: 2.5 }}
          >
            Cuéntame sobre tu sesión, evento o proyecto. Elige el canal que prefieras.
          </Typography>

          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1.5,
              px: 2,
              py: 0.8,
              border: '1px solid rgba(255,255,255,0.1)',
              backgroundColor: 'rgba(255,255,255,0.04)',
            }}
          >
            <Box
              sx={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                backgroundColor: '#fff',
                opacity: 0.7,
                animation: 'pulse 2s ease-in-out infinite',
                '@keyframes pulse': {
                  '0%, 100%': { opacity: 0.7, transform: 'scale(1)' },
                  '50%': { opacity: 0.25, transform: 'scale(1.4)' },
                },
              }}
            />
            <Typography
              variant="caption"
              sx={{ color: 'rgba(255,255,255,0.45)', letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: '0.54rem' }}
            >
              Respuesta al instante
            </Typography>
          </Box>
        </Box>

        {/* Cards de contacto */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2.5,
            flexWrap: 'wrap',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(22px)',
            transition: 'opacity 0.7s ease 0.34s, transform 0.7s ease 0.34s',
          }}
        >
          {channels.map((ch) => (
            <Box
              key={ch.id}
              component="a"
              href={ch.href}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHovered(ch.id)}
              onMouseLeave={() => setHovered(null)}
              sx={{
                flex: { xs: '1 1 100%', sm: '1 1 calc(33% - 10px)' },
                display: 'flex',
                flexDirection: 'column',
                textDecoration: 'none',
                border: '1px solid',
                borderColor: hovered === ch.id ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)',
                backgroundColor: hovered === ch.id ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.025)',
                p: { xs: 3, md: 3.5 },
                position: 'relative',
                overflow: 'hidden',
                transition: 'border-color 0.3s ease, background-color 0.3s ease',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '1px',
                  backgroundColor: '#fff',
                  transform: hovered === ch.id ? 'scaleX(1)' : 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)',
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
                <Box
                  sx={{
                    color: hovered === ch.id ? '#fff' : 'rgba(255,255,255,0.4)',
                    transition: 'color 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <ch.Icon />
                </Box>
                <Typography
                  variant="caption"
                  sx={{
                    color: 'rgba(255,255,255,0.25)',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    fontSize: '0.53rem',
                  }}
                >
                  {ch.label}
                </Typography>
              </Box>

              <Typography
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: { xs: '1.25rem', md: '1.4rem' },
                  fontWeight: 400,
                  color: '#fff',
                  lineHeight: 1.2,
                  letterSpacing: '-0.01em',
                  mb: 0.8,
                }}
              >
                {ch.handle}
              </Typography>

              <Typography
                sx={{
                  fontSize: '0.74rem',
                  color: 'rgba(255,255,255,0.3)',
                  lineHeight: 1.5,
                  mb: 3,
                  flex: 1,
                }}
              >
                {ch.sub}
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Typography
                  sx={{
                    fontSize: '0.65rem',
                    color: hovered === ch.id ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.28)',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {ch.cta}
                </Typography>
                <Box
                  sx={{
                    height: '1px',
                    backgroundColor: hovered === ch.id ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.18)',
                    width: hovered === ch.id ? 28 : 14,
                    transition: 'width 0.35s ease, background-color 0.3s ease',
                  }}
                />
              </Box>
            </Box>
          ))}
        </Box>

        {/* Firma */}
        <Box
          sx={{
            mt: { xs: 7, md: 9 },
            pt: 4,
            borderTop: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            opacity: inView ? 1 : 0,
            transition: 'opacity 0.8s ease 0.5s',
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: { xs: '0.9rem', md: '1rem' },
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.16)',
            }}
          >
            "Cada gran imagen comienza con una conversación."
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}