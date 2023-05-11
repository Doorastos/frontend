import Checkbox from '@/components/checkbox';
import AdditionalInfoDialog, { AdditionalInfoType } from '@/components/dialogs/additionalInfoDialog';
import { Dispatch, FC, SetStateAction, useState } from 'react';
import cn from 'classnames';

type Props = {
  text: string;
  info: AdditionalInfoType
  activeItem: string | null
  setActive: Dispatch<SetStateAction<string | null>>
}

const Item: FC<Props> = ({ text, info, activeItem, setActive }) => {
  const [isAIDOpen, setIsAIDOpen] = useState(false); //AID - additional item dialog

  let isActive = activeItem === text;

  const handleAIDStatus = () => setIsAIDOpen(prev => !prev);
  const handleCheckboxClick = () => setActive(isActive ? null : text);

  return <div
    className={cn(
      'group flex items-center justify-between w-full border-y cursor-pointer transition-colors hover:border-grey2 active:border-grey2',
      isActive ? 'border-grey2' : 'border-line',
    )}
  >
    <div className='flex items-center gap-x-2 w-full py-2.5' onClick={handleCheckboxClick}>
      <Checkbox checked={isActive} variant='single' />
      <p className='transition-colors text-grey1 group-hover:text-black'>{text}</p>
    </div>
    <AdditionalInfoDialog open={isAIDOpen} onOpenChange={status => setIsAIDOpen(status)} openDialog={handleAIDStatus} heading={text} {...info} />
  </div>
};

export default Item;