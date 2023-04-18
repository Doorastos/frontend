import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import cn from 'classnames';

type Props = {
  height?: number
  className?: string
  chevronClassName?: string
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const ChevronRounded: FC<Props> = ({ height = 30, className, chevronClassName, ...props }) => {
  let width = height / 2;

  return <button
    className={cn(
      'flex items-center justify-center rounded-full border transition-all border-blue1 hover:bg-blue1 active:bg-blue2 disabled:opacity-60 disabled:pointer-events-none',
      className,
    )}
    {...props}
  >
    <svg className={cn('transition-colors group-hover:stroke-white group-active:stroke-white', chevronClassName)} width={width} height={height} viewBox={`0 0 ${width} ${height}`} stroke='#0222A5' fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d={`M0.923828 0.922852L${width - .4} ${width}L0.923828 ${height}`} />
    </svg>
  </button>
};

export default ChevronRounded;