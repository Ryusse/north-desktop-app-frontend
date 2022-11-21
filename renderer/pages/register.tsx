import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { Button } from '@/elements/atoms';

const Register: NextPage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Register</h1>
      <Button
        //onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
        classButton="default-outline"
        onClick={() => router.replace('/home')}
        position="center"
      >
        Cambiar tema
      </Button>
    </div>
  );
};

export default Register;
