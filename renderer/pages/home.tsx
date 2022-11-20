import { useTheme } from 'next-themes';
import Head from 'next/head';

import { Button } from '@/elements/atoms';

const Home = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();

  return (
    <>
      <Head>
        <title>North | Home</title>
      </Head>
      <div>
        <Button
          onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
          classButton="primary"
          position="center"
        >
          Cambiar tema
        </Button>
      </div>
    </>
  );
};

export default Home;
