import { Divider, Stack, Typography } from '@mui/material';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import { Controller, useForm } from 'react-hook-form';

import { Button, Input } from '@/elements/atoms';
import {
  StyledFormContainer,
  StyledTile,
} from '@/elements/molecules/LoginForm/styles';

type FormValues = {
  email: string;
  password: string;
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

  const router = useRouter();

  const handleRedirectToRegister = () => {
    router.replace('register');
  };

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  //const { resolvedTheme, setTheme } = useTheme();

  return (
    <StyledFormContainer onSubmit={handleSubmit(onSubmit)}>
      <StyledTile variant="h1">Bienvenido de nuevo</StyledTile>

      <Stack spacing={3}>
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
          Ingresar
        </Button>

        <Divider flexItem>
          <Typography variant="body2">ó</Typography>
        </Divider>

        <Button
          //onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
          type="button"
          width="full"
          classButton="default-outline"
          onClick={handleRedirectToRegister}
        >
          Registrate
        </Button>
      </Stack>
    </StyledFormContainer>
  );
};
