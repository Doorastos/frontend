import { FC } from 'react';
import PhoneForm from './phoneForm';
import cn from 'classnames';

type Props = {
  className?: string
}

const Recall: FC<Props> = ({ className }) => {
  return <div className={cn('', className)}>
    <div className='flex flex-col gap-y-2.5'>
      <h5 className='text16-24 max-w-[11em]'>We'll call you back within a short time</h5>
      <p className='text-esm text-grey2 max-w-[17em] sm:max-w-[30em]'>We'll help you choose a door and answer any questions</p>
    </div>
    <PhoneForm />
  </div>
};

export default Recall;