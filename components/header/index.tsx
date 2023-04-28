import Image from 'next/image';
import logo from '../../public/imgs/logo.svg';
import { FC, useState } from 'react';
import CircledBtn from '../circledBtn';
import MobileNav from './mobileMenu/index';
import Link from 'next/link';
import Nav from './nav';

export type HeaderLinkType = {
  name: string
  sublinks?: Omit<HeaderLinkType, 'sublinks'>[]
};

const links = [
  {
    name: 'Catalog',
  },
  {
    name: 'Service',
    sublinks: [
      {
        name: 'How to choose doors',
      },
      {
        name: 'Delivery and installation',
      },
      {
        name: 'Payment order',
      },
      {
        name: 'Guarantees',
      },
    ],
  },
  {
    name: 'Stock',
  },
  {
    name: 'About manufacturer',
  },
  {
    name: 'Contacts',
  },
];

const Header: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleMobileModalStatus = () => setIsMobileMenuOpen(prev => !prev);

  return <header className='mainContainer fixed top-0 left-1/2 -translate-x-1/2 w-full flex justify-between items-center z-40'>
    <Link href='/'>
      <Image
        src={logo}
        alt="Logo"
      />
    </Link>
    <CircledBtn
      className='text-small bg-black/60 w-[118px] h-[118px] text-white -mt-7 hover:bg-black/80 md:w-[160px] md:h-[160px] md:-mt-10 smlg:hidden'
      textClassName='mt-8'
      onClick={handleMobileModalStatus}
    >
      Menu
    </CircledBtn>
    <Nav links={links} />
    <CircledBtn
      className='text-small bg-black/60 w-[160px] h-[160px] text-white -mt-10 hover:bg-black/80 max-smlg:hidden'
      textClassName='smlg:mt-10'
      onClick={handleMobileModalStatus}
    >
      Help choose
    </CircledBtn>
    <MobileNav
      isOpen={isMobileMenuOpen}
      closeMenu={handleMobileModalStatus}
      links={links}
    />
  </header>
};

export default Header;