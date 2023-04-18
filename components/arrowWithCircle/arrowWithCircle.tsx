import { CSSProperties, FC, ReactNode } from 'react';
import cn from 'classnames';
import ChevronRounded from '../chevronRounded';
import cls from './styles.module.scss';

type Props = {
  children: ReactNode
  circleSize?: number
  className?: string
  circleClassName?: string
  signClassName?: string
}

const ArrowWithCircle: FC<Props> = ({ children, circleSize = 30, className, circleClassName, signClassName }) => {

  return <div className={cn('group cursor-pointer w-fit', cls.arrow, className)}>
    <p className={cn('text-esmLight', signClassName)}>{children}</p>
    <div className='relative'>
      <span
        className={cn('absolute top-1/2 -translate-y-1/2 h-px bg-blue1 transition-all', cls.line)}
        style={{
          '--arrowWithCircle_circleSize': `${circleSize}px`
        } as CSSProperties}
      />
      <ChevronRounded className='ml-auto group-hover:[&>svg]:stroke-blue1' height={8} style={{ width: circleSize, height: circleSize }} />
    </div>
  </div>
};

export default ArrowWithCircle;