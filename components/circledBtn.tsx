import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from 'react';
import cn from 'classnames';

type Props = {
  children: ReactNode
  className: string
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const CircledBtn: FC<Props> = ({ children, className, ...props }) => {
  return <button
    className={cn(
      'transition-all rounded-full',
      className
    )}
    {...props}
  >
    <span>{children}</span>
  </button>
};

export default CircledBtn;