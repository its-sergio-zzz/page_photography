import { Box, Typography } from '@mui/material'
import { useState, useEffect, useRef } from 'react'

const SERVICES = [
  {
    number: '01',
    title: 'Retratos',
    tag: 'Identidad · Presencia · Autenticidad',
    short: 'Sesiones individuales y de pareja diseñadas para capturar quién eres.',
    description: 'Sesiones fotográficas individuales y de pareja diseñadas para capturar identidad, presencia y autenticidad. Cada sesión es cuidadosamente dirigida, integrando iluminación profesional, composición y narrativa visual para lograr imágenes con carácter, elegancia y atemporalidad. Disponibles en estudio o locación, con acompañamiento creativo previo, dirección durante la sesión y selección curada final.',
    accent: 'rgba(255,255,255,0.06)',
  },
  {
    number: '02',
    title: 'Eventos',
    tag: 'Bodas · Grados · Corporativos',
    short: 'Cobertura documental y estética que construye una narrativa completa.',
    description: 'Cobertura integral de bodas, grados y eventos corporativos con enfoque documental y estético. Más que registrar momentos, construyo una narrativa visual que refleja la atmósfera, las emociones y los detalles que hacen único cada evento. Incluye planificación previa, cobertura completa, edición profesional y entrega de galería digital en alta resolución optimizada para diferentes usos.',
    accent: 'rgba(255,255,255,0.06)',
  },
  {
    number: '03',
    title: 'Editorial',
    tag: 'Marcas · Productos · Medios',
    short: 'Fotografía estratégica para comunicar identidad y generar impacto visual.',
    description: 'Fotografía estratégica para marcas, productos y medios. Desarrollo conceptual desde cero, dirección de arte, producción y postproducción avanzada orientada a comunicar identidad, generar impacto visual y fortalecer el posicionamiento de marca. Ideal para campañas publicitarias, contenido digital, lookbooks y piezas editoriales.',
    accent: 'rgba(255,255,255,0.06)',
  },
  {
    number: '04',
    title: 'Fine Art',
    tag: 'Edición limitada · Museo · Coleccionable',
    short: 'Piezas artísticas únicas para espacios, coleccionistas y proyectos curatoriales.',
    description: 'Proyectos fotográficos de autor concebidos como piezas artísticas únicas. Trabajo desde una visión conceptual y estética profunda, creando obras con valor expresivo y coleccionable. Disponibles en impresiones de calidad museo, en ediciones limitadas, numeradas y certificadas, pensadas para espacios, coleccionistas y proyectos curatoriales.',
    accent: 'rgba(255,255,255,0.06)',
  },
]

function useInView(threshold = 0.15) {
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

function ServiceRow({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const [expanded, setExpanded] = useState(false)
  const [hovered, setHovered] = useState(false)
  const { ref, inView } = useInView()

  return (
    <Box
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setExpanded((e) => !e)}
      sx={{
        position: 'relative',
        cursor: 'pointer',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        overflow: 'hidden',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.7s ease ${index * 0.12}s, transform 0.7s ease ${index * 0.12}s`,
      }}
    >
      {/* Fondo hover animado */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(255,255,255,0.03) 0%, transparent 60%)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.4s ease',
          pointerEvents: 'none',
        }}
      />

      {/* Línea izquierda animada */}
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '2px',
          backgroundColor: '#fff',
          transform: hovered || expanded ? 'scaleY(1)' : 'scaleY(0)',
          transformOrigin: 'top',
          transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)',
        }}
      />

      {/* Fila principal */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: { xs: 3, md: 6 },
          px: { xs: 3, md: 5 },
          py: { xs: 3.5, md: 4.5 },
        }}
      >
        {/* Número */}
        <Typography
          sx={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: { xs: '0.7rem', md: '0.75rem' },
            color: hovered || expanded ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.18)',
            letterSpacing: '0.1em',
            minWidth: { xs: 24, md: 32 },
            transition: 'color 0.3s ease',
            flexShrink: 0,
          }}
        >
          {service.number}
        </Typography>

        {/* Título */}
        <Typography
          sx={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: { xs: '1.8rem', sm: '2.2rem', md: '3rem', lg: '3.6rem' },
            fontWeight: 400,
            color: '#fff',
            lineHeight: 1,
            letterSpacing: '-0.02em',
            flexShrink: 0,
            transition: 'letter-spacing 0.3s ease',
            ...(hovered && { letterSpacing: '0.01em' }),
          }}
        >
          {service.title}
        </Typography>

        {/* Tag — aparece en hover */}
        <Typography
          sx={{
            fontSize: { xs: '0.65rem', md: '0.7rem' },
            color: 'rgba(255,255,255,0.35)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateX(0)' : 'translateX(-8px)',
            transition: 'opacity 0.35s ease, transform 0.35s ease',
            display: { xs: 'none', md: 'block' },
          }}
        >
          {service.tag}
        </Typography>

        {/* Spacer */}
        <Box sx={{ flex: 1 }} />

        {/* Indicador expand */}
        <Box
          sx={{
            width: 32,
            height: 32,
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'border-color 0.3s, transform 0.4s cubic-bezier(0.4,0,0.2,1)',
            transform: expanded ? 'rotate(45deg)' : 'rotate(0deg)',
            ...(hovered && { borderColor: 'rgba(255,255,255,0.45)' }),
          }}
        >
          <Typography sx={{ color: 'rgba(255,255,255,0.55)', fontSize: '1rem', lineHeight: 1 }}>+</Typography>
        </Box>
      </Box>

      {/* Contenido expandido */}
      <Box
        sx={{
          maxHeight: expanded ? '500px' : '0px',
          overflow: 'hidden',
          transition: 'max-height 0.6s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <Box
          sx={{
            px: { xs: 3, md: 5 },
            pb: { xs: 4, md: 5 },
            pl: { xs: 3, md: `calc(32px + 48px + 24px)` },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 3, md: 8 },
          }}
        >
          {/* Descripción larga */}
          <Typography
            sx={{
              color: 'rgba(255,255,255,0.48)',
              fontSize: { xs: '0.88rem', md: '0.93rem' },
              lineHeight: 1.9,
              flex: 1,
            }}
          >
            {service.description}
          </Typography>

          {/* CTA lateral */}
          <Box sx={{ flexShrink: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: 2 }}>
            <Box
              component="a"
              href="#contacto"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1.5,
                px: 3,
                py: 1.5,
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#fff',
                textDecoration: 'none',
                fontSize: '0.7rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                transition: 'background 0.25s, border-color 0.25s',
                '&:hover': { background: 'rgba(255,255,255,0.07)', borderColor: 'rgba(255,255,255,0.4)' },
              }}
            >
              Consultar
              <Box sx={{ width: 16, height: '1px', backgroundColor: 'currentColor', display: 'inline-block' }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default function Services() {
  const { ref: headerRef, inView: headerInView } = useInView(0.1)

  return (
    <Box
      component="section"
      id="servicios"
      sx={{
        px: { xs: 0, md: 0 },
        py: { xs: 8, md: 14 },
        backgroundColor: 'background.paper',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <Box
        ref={headerRef}
        sx={{
          px: { xs: 3, sm: 5, md: 7, lg: 10 },
          mb: { xs: 8, md: 12 },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'flex-start', md: 'flex-end' },
          justifyContent: 'space-between',
          gap: 4,
        }}
      >
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
            <Box sx={{ width: 20, height: '1px', backgroundColor: 'rgba(255,255,255,0.18)' }} />
            <Typography
              variant="caption"
              sx={{
                color: 'rgba(255,255,255,0.28)',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                fontSize: '0.56rem',
                opacity: headerInView ? 1 : 0,
                transform: headerInView ? 'translateY(0)' : 'translateY(12px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease',
              }}
            >
              02 — Servicios
            </Typography>
          </Box>

          <Box
            sx={{
              opacity: headerInView ? 1 : 0,
              transform: headerInView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
            }}
          >
            <Typography
              sx={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: { xs: '3rem', sm: '4rem', md: '5.5rem', lg: '7rem' },
                fontWeight: 400,
                lineHeight: 0.95,
                letterSpacing: '-0.03em',
                color: '#fff',
              }}
            >
              ¿Qué
            </Typography>
            <Typography
              sx={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: { xs: '3rem', sm: '4rem', md: '5.5rem', lg: '7rem' },
                fontWeight: 300,
                fontStyle: 'italic',
                lineHeight: 0.95,
                letterSpacing: '-0.03em',
                color: 'rgba(255,255,255,0.28)',
              }}
            >
              ofrezco?
            </Typography>
          </Box>
        </Box>

        {/* Descripción lateral */}
        <Box
          sx={{
            maxWidth: 280,
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
          }}
        >
          <Typography sx={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.85rem', lineHeight: 1.8 }}>
            Cuatro disciplinas fotográficas. Un mismo estándar de calidad, atención al detalle y visión creativa.
          </Typography>
        </Box>
      </Box>

      {/* Línea separadora */}
      <Box
        sx={{
          mx: { xs: 3, sm: 5, md: 7, lg: 10 },
          height: '1px',
          background: 'linear-gradient(to right, rgba(255,255,255,0.12) 0%, transparent 100%)',
          mb: 0,
        }}
      />

      {/* Lista de servicios */}
      <Box sx={{ px: { xs: 0, md: 3, lg: 5 } }}>
        {SERVICES.map((service, i) => (
          <ServiceRow key={service.number} service={service} index={i} />
        ))}
      </Box>
    </Box>
  )
}