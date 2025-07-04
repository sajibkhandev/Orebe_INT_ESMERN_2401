import React, { use, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Cart from './Cart'
import axios from 'axios';


  
function Items({ currentItems }) {
  return (
    <>
      <div className='flex flex-wrap gap-x-[45px]'>
                {currentItems &&
                currentItems.map((item) => (
                <div>
                    <Cart src={item.thumbnail} title={item.title} price={item.price}/>
                </div>
                ))}
      </div>
    </>
  );
}

function Pagination({ itemsPerPage }) {


// new code here

  let [alldata,setAlldata]=useState([])

useEffect(()=>{
 async function alldata(){
    let data=await axios.get("https://dummyjson.com/products")
    setAlldata(data.data.products)

  }
  alldata()

},[])  
// new code here




  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = alldata.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(alldata.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % alldata.length;
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
     <h1 className='pt-4 text-primary text-sm font-dm font-normal'>Products from {itemOffset+1} to {endOffset<alldata.length ? endOffset:alldata.length} of {alldata.length}</h1>
    </div>
    </>
  );
}







export default Pagination