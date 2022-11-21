import { Box, Container, styled } from '@mui/material';
import css from 'styled-jsx/css';

export const StyledLayout = styled(Box)(
  ({ theme }) => `
    ${layout(theme)}
  `
);

export const StyledLogoContainer = styled(Box)(
  ({ theme }) => `
    ${logoContainer()}
  `
);

export const StyledLogoName = styled(Box)(
  ({ theme }) => `
    ${logoName(theme)}
  `
);

export const StyledFormContainer = styled(Box)(
  ({ theme }) => `
    ${formContainer()}
  `
);

export const StyledImageContainer = styled(Box)(
  ({ theme }) => `
    ${imageContainer()}
  `
);

const layout = (theme) => {
  return css`
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    height: 100vh;
    background-color: ${theme.palette.background.paper};
  `;
};

const formContainer = () => {
  return css`
    min-width: 360px;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
};

const logoContainer = () => {
  return css`
    position: absolute;
    display: flex;
    gap: 10px;
    align-items: center;
    margin-right: auto;
    margin-bottom: 5rem;
    top: 3rem;
    left: 3rem;

    & .shadow {
      box-shadow: 0 10px 20px rgba(222, 49, 81, 0.3);
      border-radius: 1rem;
    }
  `;
};

const logoName = (theme) => {
  return css`
    color: ${theme.palette.common.white};
    font-size: 1.25rem;
  `;
};

const imageContainer = () => {
  return css`
    width: 100%;
    position: relative;
    margin: 0;
    padding: 0;
  `;
};
