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
import { RegisterForm } from '@/elements/molecules';

const Register: NextPage = () => {
  return (
    <StyledLayout as="section">
      <StyledLogoContainer>
        <Icon name="ic_logo" className="shadow" />
        <StyledLogoName>North</StyledLogoName>
      </StyledLogoContainer>

      <StyledFormContainer>
        <RegisterForm />
      </StyledFormContainer>

      <StyledOverlay></StyledOverlay>
      <StyledImageContainer>
        <Image
          placeholder="blur"
          blurDataURL={LoginBackground?.src}
          src={LoginBackground?.src}
          alt="auth background image"
          quality={40}
          priority
          fill
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
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

export default Register;
