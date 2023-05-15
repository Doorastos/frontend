import React, { FC, useEffect, useState } from 'react';
import ReactPaginate, { ReactPaginateProps } from 'react-paginate';
import Arrow from './arrow';
import useResize from '@/hooks/useResize';

type Props = {
  items: object[]
  setItems: (items: object[]) => void
  itemsPerPage: number
}

const Pagination: FC<Props> = ({ items, setItems, itemsPerPage }) => {
  let windowWidth = useResize();
  const [itemOffset, setItemOffset] = useState(0);

  const pageCount = Math.ceil(items?.length / itemsPerPage);

  const handlePageClick: ReactPaginateProps['onPageChange'] = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items?.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    setItems(currentItems);
  }, [itemOffset]);

  return <ReactPaginate
    className='flex items-center justify-between w-full max-w-[500px] mx-auto mt-20'
    pageClassName='text-esm text-grey2 transition-colors hover:text-grey1'
    activeClassName='font-bold [&>a]:text-black'
    disabledClassName='opacity-70 pointer-events-none'
    breakLabel={<p className='text-grey2 transition-colors hover:text-grey1'>...</p>}
    nextLabel={<Arrow className='rotate-90' />}
    onPageChange={handlePageClick}
    pageRangeDisplayed={windowWidth > 540 ? 5 : 3}
    marginPagesDisplayed={windowWidth > 540 ? 3 : 1}
    pageCount={pageCount}
    previousLabel={<Arrow className='-rotate-90' />}
    renderOnZeroPageCount={null}
  />
};

export default Pagination;