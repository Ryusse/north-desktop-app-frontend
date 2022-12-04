import { Divider, Stack, Typography } from '@mui/material';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import { Controller, useForm } from 'react-hook-form';

import { StyledFormContainer, StyledTile } from './styles';
import { Button, Input } from '@/elements/atoms';

type FormValues = {
  user: string;
  email: string;
  password: string;
};

export const RegisterForm = () => {
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

  const router = useRouter();

  const handleRedirectToLogin = () => {
    router.replace('login');
  };

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <StyledFormContainer onSubmit={handleSubmit(onSubmit)}>
      <StyledTile variant="h1">Crea tu cuenta</StyledTile>

      <Stack spacing={3}>
        <Controller
          name="user"
          control={control}
          rules={{ required: true, minLength: 8 }}
          render={({ field }) => (
            <Input
              {...field}
              name="user"
              placeholder="Ingresa tu user"
              isError={Boolean(errors.user)}
              textError={`${
                errors && errors.user?.type === 'required'
                  ? 'Este campo es requerido'
                  : ''
              } ${
                errors && errors.user?.type === 'minLength'
                  ? 'Mínimo ocho caracteres'
                  : ''
              }`}
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          rules={{ required: true, minLength: 8 }}
          render={({ field }) => (
            <Input
              {...field}
              name="email"
              placeholder="Ingresa tu email"
              isError={Boolean(errors.email)}
              textError={`${
                errors && errors.email?.type === 'required'
                  ? 'Este campo es requerido'
                  : ''
              } ${
                errors && errors.email?.type === 'minLength'
                  ? 'Mínimo ocho caracteres'
                  : ''
              }`}
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
              type="password"
              name="password"
              placeholder="Ingresa tu contraseña"
              isError={Boolean(errors.password)}
              textError={`${
                errors && errors.email?.type === 'required'
                  ? 'Este campo es requerido'
                  : ''
              } ${
                errors && errors.email?.type === 'minLength'
                  ? 'Mínimo ocho caracteres'
                  : ''
              }`}
            />
          )}
        />
      </Stack>

      <Stack marginTop={5} spacing={3}>
        <Button type="submit" width="full" classButton="primary">
          Crear cuenta
        </Button>

        <Divider flexItem>
          <Typography variant="body2">ó</Typography>
        </Divider>

        <Button
          onClick={handleRedirectToLogin}
          type="button"
          width="full"
          classButton="default-outline"
        >
          Iniciar sesión
        </Button>
      </Stack>
    </StyledFormContainer>
  );
};
