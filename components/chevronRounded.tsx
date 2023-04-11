import { FC } from 'react';
import cn from 'classnames';

type Props = {
  className?: string
}

const ChevronRounded: FC<Props> = ({ className }) => {
  return <div className={cn('rounded-full', className)}>
    <svg width="25" height="48" viewBox="0 0 25 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.922852 0.923096L23.9998 24L0.922852 47.0769" stroke="#FFFFFF" />
    </svg>
  </div>
};

export default ChevronRounded;