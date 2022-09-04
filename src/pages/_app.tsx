import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';

import { Layout } from '@/components';
import { globalStyle } from '@/styles/global';

import '@/styles/reset.css';
import '@/styles/font.css';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const { hideFooter, fullContentWidth } = Component;

  return (
    <Layout nofooter={hideFooter} fullWidth={fullContentWidth}>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
