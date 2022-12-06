import { StyledLogoWrapper, StyledLogoName } from './styles';
import Icon from '@/elements/atoms/Icon';

export const Logo = () => {
  return (
    <StyledLogoWrapper>
      <Icon name="ic_logo" className="shadow" />
      <StyledLogoName>North</StyledLogoName>
    </StyledLogoWrapper>
  );
};
