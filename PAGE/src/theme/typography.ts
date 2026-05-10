import type { ThemeOptions } from '@mui/material/styles'

type TypographyOptions = ThemeOptions['typography']

export const typography: TypographyOptions = {
  fontFamily: '"Cormorant Garamond", "Georgia", serif',
  h1: {
    fontFamily: '"Cormorant Garamond", serif',
    fontWeight: 300,
    fontSize: 'clamp(3rem, 8vw, 7rem)',
    letterSpacing: '-0.02em',
    lineHeight: 1.0,
  },
  h2: {
    fontFamily: '"Cormorant Garamond", serif',
    fontWeight: 300,
    fontSize: 'clamp(2rem, 5vw, 4rem)',
    letterSpacing: '0.05em',
    lineHeight: 1.1,
  },
  h3: {
    fontFamily: '"Cormorant Garamond", serif',
    fontWeight: 400,
    fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
    letterSpacing: '0.03em',
  },
  h4: {
    fontFamily: '"Cormorant Garamond", serif',
    fontWeight: 300,
    fontSize: '1.5rem',
    letterSpacing: '0.08em',
  },
  body1: {
    fontFamily: '"Inter", "Helvetica Neue", sans-serif',
    fontWeight: 300,
    fontSize: '1rem',
    lineHeight: 1.8,
    letterSpacing: '0.01em',
  },
  body2: {
    fontFamily: '"Inter", "Helvetica Neue", sans-serif',
    fontWeight: 300,
    fontSize: '0.875rem',
    lineHeight: 1.7,
    letterSpacing: '0.02em',
  },
  caption: {
    fontFamily: '"Inter", "Helvetica Neue", sans-serif',
    fontWeight: 400,
    fontSize: '0.7rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
  },
  button: {
    fontFamily: '"Inter", "Helvetica Neue", sans-serif',
    fontWeight: 400,
    fontSize: '0.75rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
  },
}