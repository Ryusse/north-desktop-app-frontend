import { ReactNode } from 'react';

import { StyledButton } from './styles';

type ButtonName = 'primary' | 'secondary' | 'default-outline';
type ButtonType = 'submit' | 'button';
type Width = 'contained' | 'full';
type Position = 'left' | 'center' | 'right';

interface Props {
  classButton?: ButtonName;
  width?: Width;
  children: ReactNode;
  type?: ButtonType;
  position?: Position;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({
  classButton = 'primary',
  width = 'contained',
  children,
  type = 'submit',
  position = 'left',
  disabled = false,
  onClick,
}: Props) => {
  return (
    <StyledButton
      disabled={disabled}
      onClick={onClick}
      classbutton={classButton}
      type={type}
      width={width}
    >
      {children}
    </StyledButton>
  );
};
