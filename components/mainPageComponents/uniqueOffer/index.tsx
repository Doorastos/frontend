import { FC } from 'react';
import PriceComponents from './priceComponents';
import Offers from './offers';

const UniqueOffer: FC = () => {
  return <section className='mt130-200'>
    <p className='text-[14px] text-grey2'>Уникальное предложение</p>
    <PriceComponents />
    <Offers />
  </section>
};

export default UniqueOffer;