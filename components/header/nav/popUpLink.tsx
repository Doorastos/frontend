import { FC } from 'react';
import { HeaderLinkType } from '..';
import Link from './link';
import { motion } from 'framer-motion';
import cn from 'classnames';

type Props = {

} & HeaderLinkType

const PopUpLink: FC<Props> = ({ name, sublinks }) => {
  let Sublinks = sublinks?.map((s, index) => <Link {...s} key={index} />);

  return <div className='relative group'>
    <div className='group cursor-pointer'>
      <p className='flex items-center gap-x-1.5 text-grey4 transition-colors group-hover:text-white'>
        {name}
        <svg className='mt-1' width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.5 6L0.468911 0.75L6.53109 0.75L3.5 6Z" fill="#C7C7C7" />
        </svg>
      </p>
    </div>
    <div className={cn('flex flex-col gap-y-2 w-fit whitespace-nowrap absolute top-10 left-0 transition-all opacity-0 invisible group-hover:opacity-100 group-hover:visible')}>
      <span className='absolute -top-5 w-full h-5' />
      {Sublinks}
    </div>
  </div>
};

export default PopUpLink;