import Texts from '@/components/Texts';
import { TextsItemType } from '@/components/Texts/item';
import DialogBase from '@/components/dialogs/dialogBase';
import { DialogProps } from '@radix-ui/react-dialog';
import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

export type AdditionalInfoType = {
  img: StaticImageData
  texts: TextsItemType[]
}

type Props = {
  heading: string
} & AdditionalInfoType & DialogProps

const AdditionalInfoDialog: FC<Props> = ({ heading, img, texts, ...props }) => {
  return <DialogBase className='max-w-[465px] py-5' closeIconClassName='right-2.5 top-6 esm:right-5' {...props}>
    <h4 className='text-[20px] md:text-[24px]'>{heading}</h4>
    <Texts className='mt-10' items={texts} />
    <Image className='mt-7' src={img} width={425} alt={heading} />
  </DialogBase>
};

export default AdditionalInfoDialog;