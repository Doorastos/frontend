import { FC } from 'react';
import PriceComponents from './priceComponents';
import Offers from './offers';
import SectionHeading from '@/components/sectionHeading';

const UniqueOffer: FC = () => {
  return <section className='mt130-200'>
    <SectionHeading>Unique offers</SectionHeading>
    <PriceComponents />
    {/* <Offers /> */}
  </section>
};

export default UniqueOffer;