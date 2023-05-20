import { FC } from 'react';
import Item from './item';

type Props = {
  activeLink: string | string[] | undefined
}

const Where: FC<Props> = ({ activeLink }) => {

  return <div className='flex w-full md:h-fit max-md:mt-5'>
    <Item where='apartment' activeLink={activeLink}>Doors to an apartment</Item>
    <Item where='house' activeLink={activeLink}>Doors to a house</Item>
  </div>
};

export default Where;