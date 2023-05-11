import { Dispatch, FC, SetStateAction } from 'react';
import Item from './item';

type Props = {
  activeItem: string | null
  setActiveItem: Dispatch<SetStateAction<string | null>>
}

const StartPriceFrom: FC<Props> = ({ activeItem, setActiveItem }) => {

  return <div className='flex gap-x-4 mt-10 esm:gap-x-10 esm:mt-16'>
    <Item text='Ascending price' checkedItem={activeItem} setCheckedItem={setActiveItem} />
    <Item text='Price Descending' checkedItem={activeItem} setCheckedItem={setActiveItem} />
  </div>
};

export default StartPriceFrom;