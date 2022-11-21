import { NextPage } from 'next';
import { useTheme } from 'next-themes';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Button } from '@/elements/atoms';

const Home: NextPage = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const router = useRouter();
  return (
    <>
      <Head>
        <title>North | Home</title>
      </Head>
      <div>
        <Button
          //onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
          classButton="default-outline"
          onClick={() => router.replace('/login')}
          position="center"
        >
          Cambiar tema
        </Button>
      </div>
    </>
  );
};

export default Home;
