import { Box, styled, Typography } from '@mui/material';
import css from 'styled-jsx/css';

export const StyledFormContainer = styled('form')(
  ({ theme }) => `
    ${FormContainerStyles()}
  `
);

export const StyledTile = styled(Typography)(
  ({ theme }) => `
    ${TileStyles(theme)}
  `
);

const FormContainerStyles = () => {
  return css`
    width: 100%;
    background-color: transparent;
  `;
};

const TileStyles = (theme) => {
  return css`
    margin-bottom: 2.5rem;
    font-weight: 600;
    //color: ${theme.palette.grey[900]};
  `;
};
