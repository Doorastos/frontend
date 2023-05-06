import { FC } from 'react';
import Item, { BreadcrumbsItemType } from './item';

type Props = {
  items: BreadcrumbsItemType[]
}

const Breadcrumbs: FC<Props> = ({ items }) => {
  let formattedItems = items.map((i, index, arr) => {
    return {
      ...i,
      href: '/' + arr.slice(0, index + 1).map(i => i.href).join('/')
    }
  }); //add previous items to each item

  let Items = formattedItems.map((i, index, arr) => <Item {...i} isLast={arr.length === index + 1} id={index + 1} key={index} />);

  return <div className='flex gap-x-2 mb-7'>
    <Item name='Expert' href='/' id={0} />
    {Items}
  </div>
};

export default Breadcrumbs;