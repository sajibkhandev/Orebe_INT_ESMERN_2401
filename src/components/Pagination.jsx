import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Product from '../components/Product'
import data from '../data';




function Items({ currentItems }) {
  return (
    <>
      <div className='flex flex-wrap gap-x-[45px]'>
                {currentItems &&
                currentItems.map((item) => (
                <div>
                    <Product src={item.image} title={item.title} price={item.price}/>
                </div>
                ))}
      </div>
    </>
  );
}

function Pagination({ itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
    <div className='flex items-center justify-between'>
       <div className='mt-[50px]'>
       <ReactPaginate
        breakLabel="-----"
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        containerClassName="flex "
        pageLinkClassName="py-3 px-5 bg-black text-white mr-5"
      />
     </div>
     <h1 className='pt-4 text-primary text-sm font-dm font-normal'>Products from {itemOffset+1} to {endOffset<data.length ? endOffset:data.length} of {data.length}</h1>
    </div>
    </>
  );
}

export default Pagination