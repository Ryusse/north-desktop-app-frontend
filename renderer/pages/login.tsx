import { NextPage } from 'next';
import Image from 'next/image';

import LoginBackground from '../public/images/jpg/sesion-background.jpg';
import {
  StyledImageContainer,
  StyledLayout,
  StyledLogoContainer,
  StyledLogoName,
  StyledFormContainer,
} from '../styles/pages/login';
import Icon from '@/elements/atoms/Icon';
import { LoginForm } from '@/elements/molecules';

const Login: NextPage = () => {
  return (
    <StyledLayout as="section">
      <StyledFormContainer>
        <StyledLogoContainer>
          <Icon name="ic_logo" className="shadow" />
          <StyledLogoName>North</StyledLogoName>
        </StyledLogoContainer>
        <LoginForm />
      </StyledFormContainer>

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
    </StyledLayout>
  );
};

export default Login;
