import type { AppProps } from 'next/app';

import { Layout } from '@/components';

import '@/styles/reset.css';
import '@/styles/font.css';
import '@/styles/global.css';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <Layout nofooter={Component.hideFooter}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
