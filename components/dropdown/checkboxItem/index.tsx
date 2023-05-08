import { FC, useState } from 'react';
import InfoIcon from '../../icons/infoIcon';
import Checkbox from '../../checkbox';
import AdditionalInfoDialog, { AdditionalInfoType } from './additionalInfoDialog';

export type DropdownCheckboxItemType = {
  text: string
  info?: AdditionalInfoType
}

type Props = {
  isActive: boolean
  onClick: () => void
} & DropdownCheckboxItemType

const CheckboxItem: FC<Props> = ({ text, isActive, onClick, info }) => {
  const [isAIDOpen, setIsAIDOpen] = useState(false); //AID - additional item dialog
  const handleAIDStatus = () => setIsAIDOpen(prev => !prev);

  let id = `checkboxItem-${text}`;

  return <div className='flex items-center justify-between w-full'>
    <div className='group flex items-center gap-x-2 w-full' onClick={onClick}>
      <Checkbox checked={isActive} />
      <label className='text-[12px] text-grey1 cursor-pointer w-full group-hover:text-black group-active:text-black' htmlFor={id}>{text}</label>
    </div>
    {info && <>
      <InfoIcon className='hover:fill-grey2 active:fill-blue1' onClick={handleAIDStatus} />
      <AdditionalInfoDialog open={isAIDOpen} onOpenChange={status => setIsAIDOpen(status)} heading={text} {...info} />
    </>}
  </div>
};

export default CheckboxItem;