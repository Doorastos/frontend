import Link from 'next/link';
import { FC } from 'react';
import cn from 'classnames';
import textToURL from '@/helpers/textToURL';

export type BreadcrumbsItemType = {
  name: string
  href?: string
}

type Props = {
  id: number
  isLast?: boolean
} & BreadcrumbsItemType

const Item: FC<Props> = ({ name, href, id, isLast }) => {

  return <>
    {id !== 0 && <p className='text14 text-grey2'>/</p>}
    <Link className={cn('text14 transition-colors hover:text-blue1 active:text-blue2', isLast ? 'text-grey1' : 'text-grey2')} href={href || textToURL(name)}>
      {name}
    </Link>
  </>
};

export default Item;