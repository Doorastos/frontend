import { FC } from 'react';
import PhoneForm from './phoneForm';

const Recall: FC = () => {
  return <div className='mt130-300'>
    <div className='flex flex-col gap-y-2.5'>
      <h5 className='text16-24 max-w-[15em]'>We will call you back within a short time</h5>
      <p className='text-esm text-grey2 max-esm:max-w-[15em]'>We will help you choose a door and answer any questions</p>
    </div>
    <PhoneForm />
  </div>
};

export default Recall;