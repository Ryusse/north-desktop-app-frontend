import { createTheme } from '@mui/material';

import {
  northBody1,
  northBody2,
  northH1,
  northH2,
  northH3,
  northH4,
  northH5,
  northH6,
  northSubtitle1,
  northSubtitle2,
} from './typography';
import { northFontFamily } from './utils';

export const NorthDarkTheme = createTheme({
  palette: {
    mode: 'dark',
    common: {
      black: '#171C28',
      white: '#ffffff',
    },
    primary: {
      main: '#DE3151',
      dark: '#d8163a',
      light: '#de4662',
      contrastText: '#fff',
    },
    secondary: {
      main: '#353CEE',
      dark: '#282ECA',
    },
    error: {
      main: '#cf6679',
    },
    grey: {
      400: '#D4D4D4',
      900: '#333F51',
    },
    text: {
      primary: '#B9BBBE',
      secondary: '#5A5D66',
    },
    divider: '#2E2F32',
    background: {
      paper: 'rgb(23, 28, 40)',
      default: '#232833',
    },
  },
  typography: {
    fontFamily: northFontFamily,
    h1: northH1,
    h2: northH2,
    h3: northH3,
    h4: northH4,
    h5: northH5,
    h6: northH6,
    body1: northBody1,
    body2: northBody2,
    subtitle1: northSubtitle1,
    subtitle2: northSubtitle2,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 425,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
});
