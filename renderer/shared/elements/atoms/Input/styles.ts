import { FormHelperText, styled, TextField } from '@mui/material';
import css from 'styled-jsx/css';

interface Props {
  width?: string;
  component: any;
}

export const StyledInput = styled(TextField)<Props>(({ theme, width }) => ({
  width: width === 'full' ? '100%' : 'auto',
  borderRadius: '6px',

  '.input': {
    width: width === 'full' ? '100%' : 'auto',
    borderRadius: '6px',
    color: theme.palette.text.primary,
    minHeight: '48px',
    fontSize: '0.8125rem',
    fontWeight: 400,
  },

  p: {
    margin: '4px 0 0 0',
  },
}));

export const StyledHelperText = styled('span')(() => ({
  fontSize: 11,
  margin: 0,
  marginTop: 3,
}));
