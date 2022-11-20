import { ReactNode } from 'react';

import { StyledButton } from './styles';

export type ButtonName =
  | 'primary'
  | 'secondary'
  | 'white-outline'
  | 'black-outline';
export type ButtonType = 'submit' | 'button';
export type Width = 'contained' | 'full';
export type Position = 'left' | 'center' | 'right';

interface Props {
  classButton?: ButtonName;
  width?: Width;
  children: ReactNode;
  type?: ButtonType;
  position?: Position;
}

export const Button = ({
  classButton = 'primary',
  width = 'contained',
  children,
  type = 'submit',
  position = 'left',
}: Props) => {
  //const { classes } = buttonStyles({ classButton, width, position });

  return (
    <StyledButton classbutton={classButton} type={type} width={width}>
      {children}
    </StyledButton>
  );
};
