import { FC } from 'react';
import cn from 'classnames';
import ChevronRounded from '@/components/chevronRounded';

type Props = {
  className: string
}

const Arrow: FC<Props> = ({ className, ...props }) => {
  return <div className={cn('', className)} {...props}>
    <ChevronRounded className='' />
  </div>
};

export default Arrow;