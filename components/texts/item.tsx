import { FC } from 'react';
import cn from 'classnames';

export type TextsItemType = {
  description: string | string[]
  heading?: string
}

type Props = {
  className?: string
} & TextsItemType

const Item: FC<Props> = ({ description, heading, className }) => {
  return <div className={cn('flex flex-col gap-y-2.5', className)}>
    {heading && <h6 className='text-[14px] md:text-[18px]'>{heading}</h6>}
    <p className='text-esm text-grey1'>{description}</p>
  </div>
};

export default Item;