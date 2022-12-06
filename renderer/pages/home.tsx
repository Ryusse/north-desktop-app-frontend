import { ReactElement } from 'react';

import { useTheme } from 'next-themes';

import { Button } from '@/elements/atoms';
import { Header, MainLayout } from '@/elements/organisms';

const Home = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <>
      <Header />
      <div>Content</div>
      <Button
        onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
        type="button"
        width="full"
        classButton="default-outline"
      >
        Registrate
      </Button>
    </>
  );
};

Home.getLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
