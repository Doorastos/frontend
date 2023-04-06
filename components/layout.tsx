import { FC, ReactNode } from 'react';
import Header from './header/index';
import localFont from "next/font/local";

type Props = {
  children: ReactNode
}

const robodronFont = localFont({
  src: [
    {
      path: './../assets/fonts/robodron/Robodron.ttf',
      weight: '400',
    },
    {
      path: './../assets/fonts/robodron/Robodron-medium.ttf',
      weight: '500',
    },
    {
      path: './../assets/fonts/robodron/Robodron-bold.ttf',
      weight: '700',
    },
  ],
  variable: '--font-robodron'
});
const sfProDisplayFont = localFont({
  src: [
    {
      path: './../assets/fonts/sfProDisplay/sf-pro-text-light.ttf',
      weight: '300',
    },
    {
      path: './../assets/fonts/sfProDisplay/sf-pro-text.ttf',
      weight: '400',
    },
    {
      path: './../assets/fonts/sfProDisplay/sf-pro-text-medium.ttf',
      weight: '500',
    },
    {
      path: './../assets/fonts/sfProDisplay/sf-pro-text-bold.ttf',
      weight: '700',
    },
  ],
  variable: '--font-sfProDisplay'
});

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className={`${robodronFont.variable} ${sfProDisplayFont.variable} font-sans px-2.5`}>
      <Header />
      {children}
    </div>
  )
}

export default Layout;