import { FC, ReactElement, ReactNode } from 'react';

import type { EmotionCache } from '@emotion/react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';

import { GeneralProvider } from '@/context';
import PageProvider from '@/helpers/PageProvider';

interface Props {
  children: ReactNode;
}

const MyComponent = ({ children }: Props) => {
  return <>{children}</>;
};

export interface MUIAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: NextPageWithLayout;
}

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const App: FC<MUIAppProps> = ({ Component, pageProps, emotionCache }) => {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  return (
    <PageProvider emotionCache={emotionCache}>
      <GeneralProvider>
        {getLayout(
          <MyComponent>
            <Component {...pageProps} />
          </MyComponent>
        )}
      </GeneralProvider>
    </PageProvider>
  );
};

export default App;
