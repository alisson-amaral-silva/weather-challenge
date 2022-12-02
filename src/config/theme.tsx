import { createTheme, ThemeOptions } from '@mui/material'

let theme = createTheme({
  palette: {
    mode: 'light',
    custom: {
      primary: {
        50: '#e9eff1',
        100: '#d2dee3',
        200: '#bcced5',
        300: '#a5bec7',
        400: '#8faeba',
        500: '#799dac',
        600: '#628d9e',
        700: '#4c7d90',
        800: '#356c82',
        900: '#1f5c74'
      },
      secondary: {
        50: '#ebf5ef',
        100: '#d7eadf',
        200: '#c4e0cf',
        300: '#b0d6bf',
        400: '#9cccaf',
        500: '#88c19e',
        600: '#74b78e',
        700: '#61ad7e',
        800: '#4da26e',
        900: '#39985e'
      }
    },
    text: {
      primary: '#fbf6c7'
    },
    primary: {
      contrastText: '#fff',
      main: '#1f5c74'
    },
    secondary: {
      contrastText: '#000',
      main: '#39985e'
    },
    error: {
      main: '#CE3357',
      contrastText: '#63474C'
    }
  },
  typography: {
    fontFamily: "'Quicksand',sans-serif",
    htmlFontSize: 10,
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontWeight: 300,
      fontSize: '9.6rem',
      lineHeight: '11.2rem',
      letterSpacing: '-0.15rem'
    },
    h2: {
      fontWeight: 300,
      fontSize: '6rem',
      lineHeight: '7.2rem',
      letterSpacing: '-0.05rem'
    },
    h3: {
      fontWeight: 'normal',
      fontSize: '4.8rem',
      lineHeight: '5.6rem'
    },
    h4: {
      fontWeight: 'normal',
      fontSize: '3.4rem',
      lineHeight: '3.6rem'
    },
    h5: {
      fontWeight: 'normal',
      fontSize: '2.4rem',
      lineHeight: '2.4rem',
      letterSpacing: '0.018rem'
    },
    h6: {
      fontWeight: 500,
      fontSize: '2.0rem',
      lineHeight: '2.4rem',
      letterSpacing: '0.015rem'
    },
    subtitle1: {
      fontWeight: 'normal',
      fontSize: '1.6rem',
      lineHeight: '2.4rem',
      letterSpacing: '0.015rem'
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: '1.4rem',
      lineHeight: '2.4rem',
      letterSpacing: '0.01rem'
    },
    body1: {
      fontWeight: 'normal',
      fontSize: '1.6rem',
      lineHeight: '2.4rem',
      letterSpacing: '0.05rem'
    },
    body2: {
      fontWeight: 'normal',
      fontSize: '1.4rem',
      lineHeight: '2.0rem',
      letterSpacing: '0.025rem'
    },
    button: {
      fontWeight: 500,
      fontSize: '1.4rem',
      lineHeight: '1.6rem',
      letterSpacing: '0.125rem',
      textTransform: 'uppercase'
    },
    caption: {
      fontWeight: 'normal',
      fontSize: '1.2rem',
      lineHeight: '1.6rem',
      letterSpacing: '0.04rem'
    },
    overline: {
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: '1.6rem',
      letterSpacing: '0.15rem',
      textTransform: 'uppercase'
    }
  },
  shadows: [
    'none',
    '0px  1px  1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
    '0px  2px  2px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2)',
    '0px  3px  4px rgba(0, 0, 0, 0.14), 0px 3px 3px rgba(0, 0, 0, 0.12), 0px 1px 8px rgba(0, 0, 0, 0.2)',
    '0px  4px  5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2)',
    '0px  4px  5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2)',
    '0px  6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 3px 5px rgba(0, 0, 0, 0.2)',
    '0px  6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 3px 5px rgba(0, 0, 0, 0.2)',
    '0px  8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2)',
    '0px  9px 12px rgba(0, 0, 0, 0.14), 0px 3px 16px rgba(0, 0, 0, 0.12), 0px 5px 6px rgba(0, 0, 0, 0.2)',
    '0px  9px 12px rgba(0, 0, 0, 0.14), 0px 3px 16px rgba(0, 0, 0, 0.12), 0px 5px 6px rgba(0, 0, 0, 0.2)',
    '0px  9px 12px rgba(0, 0, 0, 0.14), 0px 3px 16px rgba(0, 0, 0, 0.12), 0px 5px 6px rgba(0, 0, 0, 0.2)',
    '0px 12px 17px rgba(0, 0, 0, 0.14), 0px 5px 22px rgba(0, 0, 0, 0.12), 0px 7px 8px rgba(0, 0, 0, 0.2)',
    '0px 12px 17px rgba(0, 0, 0, 0.14), 0px 5px 22px rgba(0, 0, 0, 0.12), 0px 7px 8px rgba(0, 0, 0, 0.2)',
    '0px 12px 17px rgba(0, 0, 0, 0.14), 0px 5px 22px rgba(0, 0, 0, 0.12), 0px 7px 8px rgba(0, 0, 0, 0.2)',
    '0px 12px 17px rgba(0, 0, 0, 0.14), 0px 5px 22px rgba(0, 0, 0, 0.12), 0px 7px 8px rgba(0, 0, 0, 0.2)',
    '0px 16px 24px rgba(0, 0, 0, 0.14), 0px 6px 30px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.2)',
    '0px 16px 24px rgba(0, 0, 0, 0.14), 0px 6px 30px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.2)',
    '0px 16px 24px rgba(0, 0, 0, 0.14), 0px 6px 30px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.2)',
    '0px 16px 24px rgba(0, 0, 0, 0.14), 0px 6px 30px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.2)',
    '0px 16px 24px rgba(0, 0, 0, 0.14), 0px 6px 30px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.2)',
    '0px 16px 24px rgba(0, 0, 0, 0.14), 0px 6px 30px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.2)',
    '0px 16px 24px rgba(0, 0, 0, 0.14), 0px 6px 30px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.2)',
    '0px 16px 24px rgba(0, 0, 0, 0.14), 0px 6px 30px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.2)',
    '0px 24px 38px rgba(0, 0, 0, 0.14), 0px 9px 46px rgba(0, 0, 0, 0.12), 0px 11px 15px rgba(0, 0, 0, 0.2)'
  ],
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  }
})

theme = createTheme(theme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale'
        },
        html: { fontSize: '62.5%' },
        'html, body, #root': { height: '100%' },
        '#root, main': { display: 'flex' },
        main: { flex: 1 },
        a: {
          textDecoration: 'none',
          color: theme.palette.primary.main
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            background: 'rgba(0, 0, 0, 0.12)'
          }
        },
        input: { padding: '1.5rem' },
        notchedOutline: {
          borderColor: theme.palette.custom.secondary[100]
        },
        adornedStart: { paddingLeft: '1.5rem' },
        inputAdornedStart: { paddingLeft: '0' },
        adornedEnd: { paddingRight: '1.5rem' },
        inputAdornedEnd: { paddingRight: '0' }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          ...theme.typography.subtitle1
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '1.2rem 3.2rem'
        },
        outlinedPrimary: {
          border: '1px solid rgba(0, 0, 0, 0.12)'
        },
        containedPrimary: {
          backgroundColor: theme.palette.custom.primary[500]
        }
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        colorPrimary: {
          '&.Mui-checked': {
            color: theme.palette.custom.primary[500]
          }
        }
      }
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: { svg: { fontSize: '2rem' } }
      }
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: 'none'
        }
      }
    },
    MuiAutocomplete: {
      styleOverrides: {
        option: {
          display: 'flex !important',
          justifyContent: 'space-between !important'
        },
        inputRoot: { padding: '1.5rem' },
        input: { padding: '0 !important' }
      }
    },
    MuiMobileStepper: {
      styleOverrides: {
        root: { padding: '0rem', height: '6.4rem' },
        dot: {
          height: '1.6rem',
          width: '1.6rem',
          margin: '0rem 0.4rem'
        }
      }
    },
    MuiPaper: { defaultProps: { elevation: 4 } },
    MuiListItemIcon: {
      styleOverrides: {
        root: { minWidth: '44px' }
      }
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'p',
          h2: 'p',
          h3: 'p',
          h4: 'p',
          h5: 'p',
          h6: 'p'
        }
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme.palette.custom.primary['700'],
          padding: '0.8rem 1.6rem',
          margin: '0rem !important'
        }
      }
    }
  }
} as ThemeOptions)

export { theme }
