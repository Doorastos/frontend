import { FC } from 'react';
import Item from './Item';
import forApartmentImg from '../../../public/imgs/pages/main/forWhat/forApartment.webp';
import forHouseImg from '../../../public/imgs/pages/main/forWhat/forHouse.webp';
import { StaticImageData } from 'next/image';

const items = [
  {
    heading: 'Для квартиры',
    description: 'Стильные решения для тех, кто предпочетает жить в городе',
    img: {
      src: forApartmentImg,
      alt: 'Квартира'
    },
    className: '[&>div>p]:max-w-[16.75em] esm:col-[2] esm:row-[1/3] esm:[&>img]:min-h-[320px] esm:[&>img]:max-w-[600px] md:[&>div>p]:max-w-[16.6em]',
  },
  {
    heading: 'Для дома',
    description: 'Теплые двери с терморазрывом, созданы чтобы согревать и радовать эстетикой',
    img: {
      src: forHouseImg,
      alt: 'Дом'
    },
    className: '[&>div>p]:max-w-[23em] esm:gap-y-0 esm:flex-col-reverse esm:row-[1/4] esm:[&>img]:h-2/3 esm:[&>img]:max-w-[300px] esm:[&>img]:mb-auto md:[&>div>p]:max-w-[16.6em]',
  },
];

export type MainPageForWhatItemType = {
  heading: string
  description: string
  img: {
    src: StaticImageData
    alt: string
  }
  className?: string
}

const ForWhat: FC = () => {
  let Items = items.map((i, index) => <Item {...i} key={index} />);

  return <section className='mt50-150'>
    <div className='grid max-esm:gap-y-24 esm:gap-x-12 esm:grid-cols-2 esm:grid-rows-3'>
      {Items}
    </div>
  </section>
};

export default ForWhat;