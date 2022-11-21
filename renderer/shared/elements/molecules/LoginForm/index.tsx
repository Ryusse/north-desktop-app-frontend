import { Divider, Stack, Typography } from '@mui/material';
import { useTheme } from 'next-themes';
import { Controller, useForm } from 'react-hook-form';

import { Button, Input } from '@/elements/atoms';
import {
  StyledFormContainer,
  StyledTile,
} from '@/elements/molecules/LoginForm/styles';

type FormValues = {
  email: string;
  password: string;
  a: string;
};

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
    formState,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'all',
    reValidateMode: 'onChange',
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  const { theme, resolvedTheme, setTheme } = useTheme();

  return (
    <StyledFormContainer onSubmit={handleSubmit(onSubmit)}>
      <StyledTile variant="subtitle1">Bienvenido de nuevo</StyledTile>

      <Stack spacing={4}>
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              {...field}
              isError={Boolean(errors.email)}
              name="email"
              placeholder="Ingresa tu email"
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              {...field}
              isError={Boolean(errors.password)}
              name="password"
              placeholder="Ingresa tu contraseña"
            />
          )}
        />
      </Stack>

      <Stack marginTop={8} spacing={4}>
        <Button type="submit" width="full" classButton="primary">
          Ingresar
        </Button>

        <Divider flexItem>
          <Typography variant="body2">ó</Typography>
        </Divider>

        <Button
          onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
          type="submit"
          width="full"
          classButton="default-outline"
        >
          Registrate
        </Button>
      </Stack>
    </StyledFormContainer>
  );
};
