import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import { StaticImageData } from 'next/dist/client/image';
import cn from 'classnames';
import ArrowDown from '@/components/icons/ArrowDown';
import Texts from '@/components/Texts';
import ArrowWithCircle from '@/components/arrowWithCircle';

export type AdditionalSecurityItemType = {
  img: StaticImageData
  heading: string
  subheading: string
  description: string[]
  isExpandable: boolean
  className?: string
}

type Props = {
  windowWidth: number
} & AdditionalSecurityItemType

const Item: FC<Props> = ({ heading, img, subheading, description, isExpandable, className, windowWidth }) => {
  const [isDescOpen, setIsDescOpen] = useState(false);
  const handleDescStatus = () => setIsDescOpen(prev => !prev);
  let isLaptop = windowWidth >= 768;

  useEffect(() => {
    !isExpandable && setIsDescOpen(isLaptop)
  }, [isLaptop]);

  return <div className={cn('group grid gap-y-5 md:grid-cols-2 md:gap-x-7', className)} data-state={isDescOpen ? 'open' : 'close'}>
    <h5 className='md:group-even:text-left md:group-odd:text-right'>{heading}</h5>
    <div className='flex bg-grey3 max-h-[250px] py-5 md:group-even:col-[1] md:group-even:row-[1]'>
      <Image className='h-full max-h-[210px] object-contain m-auto' src={img} alt={heading} />
    </div>
    <div className='flex flex-col gap-y-5 md:group-odd:col-[2]'>
      <h6 className='text14-16 max-w-[31em]'>{subheading}</h6>
      {(isExpandable && isLaptop) && <p className='text-esm text-grey1 font-light'>{description[0]}</p>}
      <Texts className={cn(!isDescOpen && '-z-50')} data-open={isDescOpen} animate={{
        height: !isDescOpen ? 0 : 'auto',
        opacity: !isDescOpen ? 0 : 1,
        marginTop: !isDescOpen ? '-20px' : 0,
      }}
        items={(isExpandable && isLaptop) ? description.slice(1) : description}
      />
      {!(!isExpandable && isLaptop) &&
        <button className='flex items-center justify-between gap-x-5 w-fit transition-colors hover:text-blue1' onClick={handleDescStatus}>
          <span className='text14'>{isDescOpen ? 'Спрятать' : 'Подробнее'}</span>
          <ArrowDown className='h-[12px] mt-1' />
        </button>
      }
    </div>
    {isLaptop && <ArrowWithCircle className='row-[2] col-[1]'>Узнать стоимость</ArrowWithCircle>}
  </div>
};

export default Item;