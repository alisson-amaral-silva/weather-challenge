import { theme } from 'styles/theme'

type Theme = typeof theme

type CustomPaletteColor = {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
}

declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      primary: CustomPaletteColor
      secondary: CustomPaletteColor
    }
  }

  interface PaletteOptions {
    custom: {
      primary: CustomPaletteColor
      secondary: CustomPaletteColor
    }
  }
}
