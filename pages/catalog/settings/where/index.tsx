import { FC } from 'react';
import Item from './item';

type Props = {
  activeLink: string | string[] | undefined
}

const Where: FC<Props> = ({ activeLink }) => {

  return <div className='flex w-full mt-5'>
    <Item where='apartment' activeLink={activeLink}>Doors to the apartment</Item>
    <Item where='house' activeLink={activeLink}>Doors to the house</Item>
  </div>
};

export default Where;