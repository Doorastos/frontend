import { FC, ReactNode } from 'react';
import Header from './header/index';
import localFont from "next/font/local";
import cn from 'classnames';

type Props = {
  children: ReactNode
}

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

const Layout: FC<Props> = ({ children }) => {
  return (
    <div
      className={cn('font-sfProDisplay mx-auto max-w-[1220px] px-2.5', robodronFont.variable, sfProDisplayFont.variable)}
    >
      <Header />
      {children}
    </div>
  )
}

export default Layout;