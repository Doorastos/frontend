import NavLink from '@/components/navLink';
import { FC } from 'react';
import { HeaderLinkType } from '..';
import textToURL from '@/helpers/textToURL';

type Props = {

} & HeaderLinkType

const Link: FC<Props> = ({ name }) => {
  return <NavLink className='text-grey4 transition-colors hover:text-white' activeClassName={{ color: 'white' }} href={textToURL(name) || ''}>
    {name}
  </NavLink>
};

export default Link;