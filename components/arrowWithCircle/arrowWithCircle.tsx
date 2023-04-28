import { CSSProperties, FC, ReactNode } from 'react';
import cn from 'classnames';
import ChevronRounded from '../chevronRounded';
import cls from './styles.module.scss';

type Props = {
  children: ReactNode
  color?: 'blue' | 'white'
  circleSize?: number
  className?: string
  circleClassName?: string
  signClassName?: string
}

const ArrowWithCircle: FC<Props> = ({ children, circleSize = 30, color = 'blue', className, circleClassName, signClassName }) => {

  return <div className={cn('group cursor-pointer w-fit', cls.arrow, className)}>
    <p className={cn('text-esmLight', signClassName)}>{children}</p>
    <div className='relative w-[calc(100%_+_3.5em)] -mt-2.5'>
      <span
        className={cn(
          'absolute h-px transition-all',
          color === 'blue' ? 'bg-blue1' : 'bg-white',
          cls.line,
          circleClassName,
        )}
        style={{
          '--arrowWithCircle_circleSize': `${circleSize}px`
        } as CSSProperties}
      />
      <ChevronRounded
        className={cn(
          'ml-auto group-hover:bg-transparent',
          color === 'blue' ? 'group-hover:[&>svg]:stroke-blue1' : 'group-hover:[&>svg]:stroke-white',
        )}
        height={8}
        style={{ width: circleSize, height: circleSize }}
        color={color}
      />
    </div>
  </div>
};

export default ArrowWithCircle;