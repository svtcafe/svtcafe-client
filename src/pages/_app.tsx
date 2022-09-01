import type { AppProps } from 'next/app';

import '@/styles/reset.css';
import '@/styles/font.css';
import '@/styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
