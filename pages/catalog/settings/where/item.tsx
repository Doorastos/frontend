import Link from 'next/link';
import { FC, ReactNode } from 'react';
import cn from 'classnames';

type Props = {
  children: ReactNode
  where: string
  activeLink: string | string[] | undefined
}

const Item: FC<Props> = ({ children, where, activeLink }) => {
  return <Link
    className={cn(
      'text-esm w-full text-center transition-colors py-2.5 active:bg-black active:text-white',
      activeLink === where ? 'bg-black text-white' : 'bg-line text-black hover:bg-grey4',
    )}
    href={{ pathname: '/catalog', query: `where=${where}` }}
  >
    {children}
  </Link>
};

export default Item;