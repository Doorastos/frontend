import { FC, useEffect, useState } from 'react';

const signs = [
  'Production',
  'Delivery and installation of entrance doors'
];

const InitializationScreen: FC = () => {
  const [signToShow, setSignToShow] = useState(signs[0]);

  useEffect(() => {
    let randomSign = [...signs].sort((a, b) => 0.5 - Math.random())[0];

    setSignToShow(randomSign);
  }, []);

  return <div className='flex flex-col justify-center min-h-screen min-w-full'>
    <div className='absolute -left-[calc((100vw_-_100%)_/_2)] top-0 bg-black w-screen h-screen max-w-[100vw] -z-20' />
    <h2 className='font-robodron font-medium tracking-widest text-[min(8.8cqw,_113px)] text-[rgba(255,_255,_255,_0.15)]'>Expert</h2>
    <div className='py-7 border-y border-grey1 mt-12'>
      <p className='text-light text-grey4 text-center'>{signToShow}</p>
    </div>
  </div>
};

export default InitializationScreen;