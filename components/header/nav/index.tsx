import { FC } from 'react';
import { HeaderLinkType } from '..';
import Link from './link';
import PopUpLink from './popUpLink';
import textToURL from '@/helpers/textToURL';

type Props = {
  links: HeaderLinkType[]
}

const Nav: FC<Props> = ({ links }) => {
  let Links = links.map((l, index) => textToURL(l.name) !== undefined ? <Link {...l} key={index} /> : <PopUpLink {...l} key={index} />);

  return <nav className='flex gap-x-7 max-smlg:hidden'>
    {Links}
  </nav>
};

export default Nav;