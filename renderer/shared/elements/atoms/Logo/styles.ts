import { Box, Typography, styled } from '@mui/material';

export const StyledLogoWrapper = styled(Box)({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',

  '& .shadow': {
    boxShadow: '0 10px 20px rgba(222, 49, 81, 0.3)',
    borderRadius: '1rem',
  },
});

export const StyledLogoName = styled(Typography)(({ theme }) => ({
  fontSize: '1.25rem',
  fontWeight: 'bold',
}));
