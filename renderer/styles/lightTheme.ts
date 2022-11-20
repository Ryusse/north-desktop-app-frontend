import { createTheme } from '@mui/material/styles';

import {
  northBody1,
  northBody2,
  northH1,
  northH2,
  northSubtitle1,
} from './typography';
import { northFontFamily } from './utils';

export const NorthLightTheme = createTheme({
  palette: {
    mode: 'light',
    common: {
      black: '#171C28',
      white: '#ffffff',
    },
    primary: {
      main: '#DE3151',
      dark: '#C52441',
    },
    secondary: {
      main: '#353CEE',
      dark: '#282ECA',
    },
    grey: {
      400: '#D4D4D4',
      900: '#333F51',
    },
    text: {
      primary: '#596080',
      secondary: '#9EA2B8',
    },
    divider: '#5822b9',
    background: {
      paper: '#ffffff',
      default: '#F4F5F7',
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
