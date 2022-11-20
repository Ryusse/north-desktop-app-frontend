import { Box, Container, Paper, Typography } from '@material-ui/core';
import Head from 'next/head';

import { Button } from '@/elements/atoms';

const Home = () => {
  return (
    <>
      <Head>
        <title>Home - Nextron (with-typescript-material-ui)</title>
      </Head>
      <div>
        <Button classButton="primary" position="center">
          Cambiar tema
        </Button>
      </div>
    </>
  );
};

export default Home;
