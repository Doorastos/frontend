import { FC, ReactNode } from 'react';
import cn from 'classnames';

type Props = {
  children: ReactNode
  circleSize: number
  className?: string
  circleClassName?: string
  signClassName?: string
}

const ArrowWithCircle: FC<Props> = ({ children, circleSize, className, circleClassName, signClassName }) => {
  return <div className={cn('cursor-pointer w-fit', className)}>
    <p className={cn('text-esmLight', signClassName)}>{children}</p>
    <div className={cn('relative', circleClassName)} style={{ width: `calc(100% - ${circleSize / 2}px)` }}>
      <svg className='w-full' height='8' viewBox="0 0 208 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M208 4.35355C207.414 4.15829 208 3.84171 208 3.64645L204.037 0.464466C203.842 0.269204 203.525 0.269204 203.33 0.464466C203.135 0.659728 203.135 0.976311 203.33 1.17157L206.159 4L203.33 6.82843C203.135 7.02369 203.135 7.34027 203.33 7.53553C203.525 7.7308 203.842 7.7308 204.037 7.53553L207.219 4.35355ZM0 4.5H206.866V3.5H0V4.5Z" fill="#0222A5" />
      </svg>
      <div
        className='absolute right-0 top-1/2 -translate-y-1/2 -translate-x-[10%] border border-blue1 rounded-full'
        style={{
          width: circleSize,
          height: circleSize,
          right: `-${circleSize / 2}px`
        }}
      />
    </div>
  </div>
};

export default ArrowWithCircle;