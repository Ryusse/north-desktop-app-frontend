import { forwardRef } from 'react';

import VisibilityIcon from '@mui/icons-material/Visibility';
import { IconButton, InputAdornment } from '@mui/material';

import { StyledInput, StyledHelperText } from './styles';

type Width = 'full' | 'contained';
type Type = 'text' | 'number' | 'email' | 'password' | 'search';

interface Props {
  value?: string;
  name: string;
  placeholder: string;
  width?: Width;
  textError?: string;
  isError?: any;
  type?: Type;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showIcon?: boolean;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      value,
      onChange,
      name,
      placeholder,
      width = 'full',
      textError,
      isError,
      type,
      showIcon = false,
      ...props
    },
    ref
  ) => {
    return (
      <StyledInput
        {...props}
        type={type}
        onChange={onChange}
        value={value ? value : ''}
        error={isError}
        name={name}
        ref={ref}
        InputProps={{
          className: 'input',
          // endAdornment: (
          //   <InputAdornment position="end">
          //     {showIcon ? <VisibilityIcon color="error" /> : null}
          //   </InputAdornment>
          // ),
        }}
        width={width}
        placeholder={placeholder}
        size="small"
        hiddenLabel
        variant="outlined"
        helperText={
          isError ? <StyledHelperText>{textError}</StyledHelperText> : ''
        }
      />
    );
  }
);
