import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { FC } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from '@/components/layout';
import { CookiesProvider } from 'react-cookie';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return <CookiesProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </CookiesProvider>
}

export default App