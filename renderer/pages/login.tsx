import { Typography } from '@material-ui/core';
import { NextPage } from 'next';
import Image from 'next/image';

import LoginBackground from '../public/images/jpg/sesion-background.jpg';
import {
  StyledImageContainer,
  StyledLayout,
  StyledLogoContainer,
  StyledLogoName,
  StyledFormContainer,
  StyledOverlay,
  StyledFooter,
  StyledFooterText,
} from '../styles/pages/login';
import Icon from '@/elements/atoms/Icon';
import { LoginForm } from '@/elements/molecules';

const Login: NextPage = () => {
  return (
    <StyledLayout as="section">
      <StyledLogoContainer>
        <Icon name="ic_logo" className="shadow" />
        <StyledLogoName>North</StyledLogoName>
      </StyledLogoContainer>

      <StyledFormContainer>
        <LoginForm />
      </StyledFormContainer>

      <StyledOverlay></StyledOverlay>
      <StyledImageContainer>
        <Image
          fill
          src={LoginBackground?.src}
          alt="login background image"
          quality={40}
          placeholder="blur"
          blurDataURL={LoginBackground?.src}
          style={{ objectFit: 'cover' }}
        />
      </StyledImageContainer>
      <StyledFooter>
        <StyledFooterText>
          2022. North, Todos los derechos reservados.
        </StyledFooterText>
      </StyledFooter>
    </StyledLayout>
  );
};

export default Login;
