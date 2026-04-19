import type { ThemeOptions } from '@mui/material/styles'

type PaletteOptions = NonNullable<ThemeOptions['palette']>

export const palette: PaletteOptions = {
  mode: 'dark',
  primary: {
    main: '#E8E0D5',
    light: '#F5F0EA',
    dark: '#C8B8A8',
    contrastText: '#0A0A0A',
  },
  secondary: {
    main: '#8C7B6B',
    light: '#A89080',
    dark: '#6A5A4A',
    contrastText: '#F5F0EA',
  },
  background: {
    default: '#080808',
    paper: '#111111',
  },
  text: {
    primary: '#E8E0D5',
    secondary: '#8C8078',
    disabled: '#4A4540',
  },
  divider: 'rgba(232, 224, 213, 0.08)',
}