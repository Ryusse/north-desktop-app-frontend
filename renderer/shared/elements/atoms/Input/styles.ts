import { styled, TextField } from '@mui/material';
import css from 'styled-jsx/css';

interface Props {
  width: string;
}

export const StyledInput = styled(TextField)<Props>(
  ({ theme, width }) => `
    ${InputStyles(width, theme)}
  `
);

const InputStyles = (width: string, theme) => {
  return css`
    background-color: ${theme.palette.background.default};
    width: ${width === 'full' ? '100%' : 'auto'};
    border-radius: 6px;

    .input {
      background-color: ${theme.palette.background.default};
      color: ${theme.palette.text.primary};
      min-height: 48px;
      font-size: 0.8125rem;
      border-radius: 6px;
      font-weight: 400;
    }
  `;
};
