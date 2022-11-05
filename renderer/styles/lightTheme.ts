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
      primary: '#333F51',
      secondary: '#8E9BAE',
    },

    mode: 'light',
  },

  typography: {
    fontFamily: northFontFamily,
    h1: northH1,
    h2: northH2,
    body1: northBody1,
    body2: northBody2,
    subtitle1: northSubtitle1,
  },
});
