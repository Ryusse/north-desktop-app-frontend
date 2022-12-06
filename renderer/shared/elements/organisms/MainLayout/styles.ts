import { Box, styled, alpha } from '@mui/material';

import Background from '../../../../public/images/jpg/main-background5.jpg';

export const StyledMainLayout = styled(Box)({
  display: 'flex',
  background: `url(${Background.src}) center no-repeat`,
  backgroundSize: 'cover',
});

export const StyledContent = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundColor: alpha(theme.palette.background.paper, 0.95),
  backdropFilter: 'blur(20px)',
}));
