import Image from 'next/image';
import logo from '../../assets/imgs/logo.svg';
import { FC, useState } from 'react';
import CircledBtn from '../circledBtn';
import MobileMenu from './mobileMenu';

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

  return <header className='flex justify-between items-center'>
    <Image
      src={logo}
      alt="Логотип"
    />
    <CircledBtn
      className='bg-black/60 text-esm text-white px-10 py-12 -mt-7 hover:bg-black/80'
      onClick={handleMobileModalStatus}
    >
      Меню
    </CircledBtn>
    <MobileMenu
      isOpen={isMobileMenuOpen}
      onClose={handleMobileModalStatus}
      links={links}
    />
  </header>
};

export default Header;