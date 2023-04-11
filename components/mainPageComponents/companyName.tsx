import { FC } from 'react';
import companyNameImg from '../../public/imgs/pages/main/companyName/name.webp';
import Image from 'next/image';

const CompanyName: FC = () => {
  return <section className='mt130-300'>
    <Image className='w-full min-h-[28px]' src={companyNameImg} alt='эксперт' width={1245} height={113} />
  </section>
};

export default CompanyName;