import { FC } from 'react';
import Image from 'next/image';
import ChevronRounded from '../chevronRounded';
import Pagination from '../pagination';

type Props = {
  img: string
  personName: string
  review: string
  setNewPage: (operation: 'next' | 'prev') => void
  windowWidth: number
  currentPortion: number
  portionsCount: number
}

const Item: FC<Props> = ({ img, personName, review, setNewPage, windowWidth, currentPortion, portionsCount }) => {
  console.log(currentPortion, portionsCount)
  return <div className=''>
    <div className='grid grid-cols-2'>
      <Image src={img} alt='Дверь' width={500} height={600} />
      <div className='flex gap-x-5 mt-auto ml-auto'>
        <ChevronRounded className='group w-14 h-14' disabled={currentPortion === 0} chevronClassName='rotate-180 group-hover:stroke-white' onClick={() => setNewPage('prev')} height={18} />
        <ChevronRounded className='group w-14 h-14' disabled={currentPortion === portionsCount - 1} chevronClassName='group-hover:stroke-white' onClick={() => setNewPage('next')} height={18} />
      </div>
      <Pagination className='max-md:mt-2.5' windowWidth={windowWidth} currentPortion={currentPortion} portionsCount={portionsCount} />
    </div>
    <div className='max-md:mt-5'>
      <h6 className='text16-24'>{personName}</h6>
      <p className='mt10-20 text-esm text-grey2'>{review}</p>
    </div>
  </div>
};

export default Item;
