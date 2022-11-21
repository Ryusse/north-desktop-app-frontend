import { ButtonBase, styled } from '@mui/material';
import css from 'styled-jsx/css';

interface Props {
  classbutton: string;
  width: string;
}

const defaultStyles = (width: string) => {
  return css`
    font-weight: 500;
    padding-inline: 3.4375rem;
    padding-block: 0.9rem;
    border-radius: 0.625rem;
    border: 1px solid;
    width: ${width === 'full' ? '100%' : 'auto'};
  `;
};

const classButtonStyles = (classbutton: string, theme) => {
  switch (classbutton) {
    case 'primary':
      return css`
        background-color: ${theme.palette.primary.main};
        color: ${theme.palette.common.white};
        border-color: ${theme.palette.primary.main};
        box-shadow: 0 10px 20px rgba(222, 49, 81, 0.3);
      `;
    case 'default-outline':
      return css`
        background-color: transparent;
        border-color: ${theme.palette.primary.white};
      `;
  }
};

export const StyledButton = styled(ButtonBase)<Props>(
  ({ theme, classbutton, width }) => `
    ${defaultStyles(width)}
    ${classButtonStyles(classbutton, theme)}
  `
);
