import { FC } from 'react';

import type { EmotionCache } from '@emotion/react';
import { AppProps } from 'next/app';

import PageProvider from '@/helpers/PageProvider';

export interface MUIAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const App: FC<MUIAppProps> = ({ Component, pageProps, emotionCache }) => (
  <PageProvider emotionCache={emotionCache}>
    <Component {...pageProps} />
  </PageProvider>
);

export default App;
