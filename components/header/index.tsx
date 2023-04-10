import Image from 'next/image';
import logo from '../../public/imgs/logo.svg';
import { FC, useState } from 'react';
import CircledBtn from '../circledBtn';
import MobileNav from './mobileMenu/index';
import Link from 'next/link';
import Nav from './nav';

export type HeaderLinkType = {
  name: string
  href?: string
  sublinks?: Omit<HeaderLinkType, 'sublinks'>[]
};

const links = [
  {
    name: 'Каталог',
    href: 'catalog',
  },
  {
    name: 'Сервис',
    sublinks: [
      {
        name: 'Как выбрать двери',
        href: 'howToChooseDoors',
      },
      {
        name: 'Доставка и установка',
        href: 'deliveryAndInstallation',
      },
      {
        name: 'Порядок оплаты',
        href: 'paymentOrder',
      },
      {
        name: 'Гарантии',
        href: 'guarantees',
      },
    ],
  },
  {
    name: 'Акции',
    href: 'stock',
  },
  {
    name: 'О производстве',
    href: 'aboutProduction',
  },
  {
    name: 'Контакты',
    href: 'contacts',
  },
];

const Header: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleMobileModalStatus = () => setIsMobileMenuOpen(prev => !prev);

  return <header className='fixed top-0 left-1/2 -translate-x-1/2 max-w-[1220px] w-full flex justify-between items-center px-2.5 z-40'>
    <Link href='/'>
      <Image
        src={logo}
        alt="Логотип"
      />
    </Link>
    <CircledBtn
      className='text-small bg-black/60 w-[118px] h-[118px] text-white -mt-7 hover:bg-black/80 md:w-[160px] md:h-[160px] md:-mt-10 smlg:hidden'
      textClassName='mt-8'
      onClick={handleMobileModalStatus}
    >
      Меню
    </CircledBtn>
    <Nav links={links} />
    <CircledBtn
      className='text-small bg-black/60 w-[160px] h-[160px] text-white -mt-10 hover:bg-black/80 max-smlg:hidden'
      textClassName='smlg:mt-10'
      onClick={handleMobileModalStatus}
    >
      Помочь выбрать
    </CircledBtn>
    <MobileNav
      isOpen={isMobileMenuOpen}
      closeMenu={handleMobileModalStatus}
      links={links}
    />
  </header>
};

export default Header;