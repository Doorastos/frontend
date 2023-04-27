import Layout from '@/components/layout';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { FC } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}

export default App