import Checkbox from '@/components/checkbox';
import { Dispatch, FC, SetStateAction } from 'react';

type Props = {
  text: string
  checkedItem: string | null
  setCheckedItem: Dispatch<SetStateAction<string | null>>
}

const Item: FC<Props> = ({ text, checkedItem, setCheckedItem }) => {
  const handleClick = () => {
    setCheckedItem(checkedItem === text ? null : text);
  };

  return <div className='group flex items-center gap-x-2 cursor-pointer' onClick={handleClick}>
    <Checkbox checked={text === checkedItem} variant='single' />
    <label className='text-tiny text-grey1 transition-colors cursor-pointer group-hover:text-black'>{text}</label>
  </div>
};

export default Item;