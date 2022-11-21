import { forwardRef } from 'react';

import { StyledInput } from './styles';

type Width = 'full' | 'contained';

interface Props {
  value?: string;
  name: string;
  placeholder: string;
  width?: Width;
  isError?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ value, onChange, name, placeholder, width = 'full', isError }, ref) => {
    return (
      <StyledInput
        onChange={onChange}
        value={value ? value : ''}
        error={isError}
        name={name}
        ref={ref}
        InputProps={{ className: 'input' }}
        width={width}
        placeholder={placeholder}
        size="small"
        hiddenLabel
        //id="filled-hidden-label-normal"
        variant="outlined"
      />
    );
  }
);
