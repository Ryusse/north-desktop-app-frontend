import { FC } from 'react';

import type { EmotionCache } from '@emotion/react';
import { AppProps } from 'next/app';

import { GeneralProvider } from '@/context';
import PageProvider from '@/helpers/PageProvider';

export interface MUIAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const App: FC<MUIAppProps> = ({ Component, pageProps, emotionCache }) => (
  <PageProvider emotionCache={emotionCache}>
    <GeneralProvider>
      <Component {...pageProps} />
    </GeneralProvider>
  </PageProvider>
);

export default App;
