import { Box, styled } from '@mui/material';

export const StyledHeader = styled(Box)(({ theme }) => ({
  width: '100%',
  minHeight: '5rem',
  display: 'flex',
  alignItems: 'center',
  //borderBottom: `1px solid ${theme.palette.divider}`,
}));
