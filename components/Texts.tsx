import { FC, ReactNode } from 'react';
import cn from 'classnames';
import { motion, MotionProps } from 'framer-motion';

type Props = {
  items: string[]
  className?: string
  itemClassName?: string
} & MotionProps

const Texts: FC<Props> = ({ items, className, itemClassName, ...props }) => {
  let Items = items.map((i, index) => <p className={cn('text-esm text-grey1', itemClassName)} key={index}>{i}</p>);

  return <motion.div className={cn('flex flex-col gap-y-2.5', className)} {...props}>
    {Items}
  </motion.div>
};

export default Texts;