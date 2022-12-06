import { NextPage } from 'next';
import Image from 'next/image';

import LoginBackground from '../public/images/jpg/sesion-background.jpg';
import {
  StyledImageContainer,
  StyledLayout,
  StyledLogoContainer,
  StyledFormContainer,
  StyledOverlay,
  StyledFooter,
  StyledFooterText,
} from '../styles/pages/login';
import { Logo } from '@/elements/atoms';
import { LoginForm } from '@/elements/molecules';

const Login: NextPage = () => {
  return (
    <StyledLayout as="section">
      <StyledLogoContainer>
        <Logo />
      </StyledLogoContainer>

      <StyledFormContainer>
        <LoginForm />
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

export default Login;
