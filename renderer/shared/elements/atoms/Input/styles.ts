import { FormHelperText, styled, TextField } from '@mui/material';
import css from 'styled-jsx/css';

interface Props {
  width: string;
}

// ${({ width }) => {
//   switch (width) {
//     case 'full':
//       return css`
//         a{
//       `;
//     case 'auto':
//       return `
//         width: auto;
//       `;
//   }
// }}
export const StyledInput = styled(TextField)<Props>(
  ({ theme, width }) => `
  width: ${width === 'full' ? '100%' : 'auto'};
  border-radius: 6px;

  .input {
    width: ${width === 'full' ? '100%' : 'auto'};
    border-radius: 6px;
    color: ${theme.palette.text.primary};
    min-height: 48px;
    font-size: 0.8125rem;
    border-radius: 6px;
    font-weight: 400;
  }

  p {
    margin: 4px 0 0 0;
  }
`
);

export const StyledHelperText = styled(FormHelperText)(() => ({
  fontSize: 11,
  margin: 0,
  marginTop: 3,
}));
