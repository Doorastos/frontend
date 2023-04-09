import NavLink from '@/components/navLink';
import { FC } from 'react';
import { HeaderLinkType } from '..';

type Props = {

} & HeaderLinkType

const Link: FC<Props> = ({ name, href }) => {
  return <NavLink className='text-grey4 transition-colors hover:text-white' activeClassName={{ color: 'white' }} href={href || ''}>
    {name}
  </NavLink>
};

export default Link;