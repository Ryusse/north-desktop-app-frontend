import Head from 'next/head';

import { Button } from '@/elements/atoms';

const Home = () => {
  return (
    <>
      <Head>
        <title>Home - Nextron (with-typescript-material-ui)</title>
      </Head>
      <div>
        <Button buttonName="primary" width="contained" position="center">
          Postula ahora
        </Button>

        <h1>Home</h1>
      </div>
    </>
  );
};

export default Home;
