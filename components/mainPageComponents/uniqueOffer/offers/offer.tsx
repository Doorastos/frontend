import { FC } from 'react';
import { UniqueOfferItemType } from '.';
import Image from 'next/image';

type Props = {

} & UniqueOfferItemType

const Offer: FC<Props> = ({ id, img, name, price }) => {
  return <div className='flex flex-col gap-y-2.5'>
    <div className='bg-grey3'>
      <Image className='w-auto h-auto' src={img} alt={name} width={286} height={550} priority />
    </div>
    <p className='text-esm text-grey1'>{price} ₽</p>
  </div>
};

export default Offer;
