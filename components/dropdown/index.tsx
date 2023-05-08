import { FC, useState } from 'react';
import CheckboxItem, { DropdownCheckboxItemType } from './checkboxItem';
import ChevronDown from '../icons/chevronDown';
import { motion } from 'framer-motion';
import cn from 'classnames';

type Props = {
  defaultItem: string
  items: DropdownCheckboxItemType[]
}

const Dropdown: FC<Props> = ({ defaultItem, items }) => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleItemClick = (item: string) => {
    if (checkedItems.includes(item)) {
      setCheckedItems(prev => prev.filter(fi => fi !== item));
    } else {
      setCheckedItems(prev => [...prev, item]);
    };
  };

  let Items = items.map((i, index) => <CheckboxItem {...i} isActive={checkedItems.includes(i.text)} onClick={() => handleItemClick(i.text)} key={index} />);

  return <div className={cn('relative border border-grey4', isExpanded ? 'border-b-0' : 'transition-colors hover:border-grey2')}>
    <button className='flex justify-between items-center w-full p-2.5' onClick={() => setIsExpanded(prev => !prev)}>
      <p className='text14 text-grey1'>{defaultItem}</p>
      <ChevronDown className={cn('transition-transform', isExpanded && 'rotate-180')} />
    </button>
    <motion.div
      className={cn(
        'absolute -left-[1px] pt-2.5 flex flex-col gap-y-2.5 w-[calc(100%_+_2px)] transition-all bg-white border border-grey4 border-t-0 px-2.5 pb-5',
        !isExpanded && 'invisible opacity-0'
      )}
    >
      {Items}
    </motion.div>
  </div>
};

export default Dropdown;