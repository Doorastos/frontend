import { FC } from 'react';
import Component from './component';

const components = [
  'Качественные замки и ручки',
  'Изменение цвета и рисунка фрезеровки',
  'Замер размеров входной двери ',
  'Доставка',
  'Демонтаж старой двери',
  'Установка новой двери',
  'Заделка швов монтажной пеной',
  'Уборка мусора',
  'Утилизация старой двери',
];

const PriceComponents: FC = () => {
  let Components = components.map((c, index) => <Component text={c} key={index} />);

  return <div className='grid overflow-x-hidden mt-10 esm:grid-cols-[1fr_2fr] esm:gap-x-6 md:grid-cols-2 md:mt-12'>
    <h2 className='text-black max-w-[8em]'>В стоимость двери входит</h2>
    <div className='flex flex-col gap-y-2.5 mt-5 esm:mt-[2.4rem] md:mt-[4.8rem]'>
      {Components}
    </div>
  </div>
};

export default PriceComponents;