import { createTheme } from '@mui/material';

import {
  northBody1,
  northBody2,
  northH1,
  northH2,
  northSubtitle1,
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
    divider: '#1E232E',
    background: {
      paper: 'rgb(23, 28, 40)',
      default: '#262C39',
    },
  },
  typography: {
    fontFamily: northFontFamily,
    h1: northH1,
    h2: northH2,
    body1: northBody1,
    body2: northBody2,
    subtitle1: northSubtitle1,
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
