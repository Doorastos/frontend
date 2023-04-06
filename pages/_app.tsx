import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import localFont from '@next/font/local';

const robodronFont = localFont({
  src: [
    {
      path: './../public/fonts/robodron/Robodron.ttf',
      weight: '400',
    },
    {
      path: './../public/fonts/robodron/Robodron-medium.ttf',
      weight: '500',
    },
    {
      path: './../public/fonts/robodron/Robodron-bold.ttf',
      weight: '700',
    },
  ],
  variable: '--font-robodron'
});
const sfProDisplayFont = localFont({
  src: [
    {
      path: './../public/fonts/sfProDisplay/sf-pro-text-light.ttf',
      weight: '300',
    },
    {
      path: './../public/fonts/sfProDisplay/sf-pro-text.ttf',
      weight: '400',
    },
    {
      path: './../public/fonts/sfProDisplay/sf-pro-text-medium.ttf',
      weight: '500',
    },
    {
      path: './../public/fonts/sfProDisplay/sf-pro-text-bold.ttf',
      weight: '700',
    },
  ],
  variable: '--font-sfProDisplay'
});

export default function App({ Component, pageProps }: AppProps) {
  return <div className={`${robodronFont.variable} ${sfProDisplayFont.variable} font-sans`}>
    <Component {...pageProps} />
  </div> 
}
