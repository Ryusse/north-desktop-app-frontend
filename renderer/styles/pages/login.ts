import { Box, Typography, styled, alpha } from '@mui/material';

export const StyledLayout = styled(Box)({
  width: '100%',
  position: 'relative',
  display: 'grid',
  rowGap: '3rem',
  gridTemplateRows: '48px auto 48px',
  padding: '1rem',

  '@media (min-height: 700px)': {
    height: '100vh',
  },
});

export const StyledLogoContainer = styled(Box)({
  justifySelf: 'start',
  zIndex: 2,
  marginRight: 'auto',
});

export const StyledFormContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
  margin: 'auto',
  zIndex: 2,
  borderRadius: '1rem',
  width: '100%',
  padding: '1.5rem',
  height: 'auto',
  backgroundColor: theme.palette.background.paper,
  boxsShadow: 'rgb(0 0 0 / 15%) 0 2px 8px',

  [theme.breakpoints.up('md')]: {
    maxWidth: '25rem',
  },
}));

export const StyledOverlay = styled(Box)(({ theme }) => ({
  zIndex: 1,
  width: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  margin: 0,
  padding: 0,
  backdropFilter: 'blur(20px)',
  backgroundColor: alpha(theme.palette.background.paper, 0.3),
}));

export const StyledImageContainer = styled(Box)({
  width: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  margin: 0,
  padding: 0,
});

export const StyledFooter = styled(Box)({
  zIndex: 2,
  width: '100%',
  display: 'grid',
  placeContent: 'center',
});

export const StyledFooterText = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: '0.8rem',
  fontWeight: '400',
}));
