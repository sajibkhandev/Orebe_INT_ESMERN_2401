import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import Button from '../components/Button'
import Image from '../components/Image'
import Flex from '../components/Flex'
import { FaBarsStaggered, FaUser } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { IoMdArrowDropdown } from 'react-icons/io';
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import { ImCross } from 'react-icons/im';
import { decrement, increment, removeitem } from '../slices/addtocart';

import { Link } from 'react-router-dom'


const Siderber = () => {
  let data=useSelector((state)=>state.addtocart.value)
  
  

  let dispatch=useDispatch()

  let [total,setTotal]=useState(0)
 
  
  let  [showcart,setShowCart]=useState(false)
  let handleAddtocart=()=>{
    setShowCart(!showcart)
    
    
  }
  let handleIncrement=(item)=>{
    dispatch(increment(item))
    
  }
  let handleDecrement=(item)=>{
    dispatch(decrement(item))
    
  }
  let handleCross=(item)=>{
    dispatch(removeitem(item))
    
    
  }

  useEffect(()=>{
    let total=0
    data.map(item=>{
      total+=item.quantity*item.price;
    })
    setTotal(total);
    

  },[data])


  return (
    <section className='py-6 bg-[#F5F5F3]'>
        <Container>
            <Flex className='items-center'>
                <div className='w-3/12'>
                <Flex className='gap-x-[10px] items-center'>
                    <FaBarsStaggered />
                    <p className='text-sm text-secondray font-dm font-normal'>Shop by Category</p>
                </Flex>
                </div>
                <div className='w-6/12'>
                <div className='relative'>
                     <input className='py-4 pl-6 pr-16  bg-white w-full placeholder:text-sm placeholder:text-[#C4C4C4]' type="text" placeholder='Search Products'/>
                     <FiSearch  className='absolute top-1/2 right-[20px] -translate-y-1/2 text-sm'/>
                </div>

                </div>
                <div className='w-3/12 '>
                  <Flex className='justify-end items-center'>
                            <FaUser />
                            <IoMdArrowDropdown className='ml-[10px] text-black'/>
                            <FaShoppingCart onClick={handleAddtocart} className='ml-10 text-black'/>
                            
                  </Flex>

                  {
                    showcart && <div className='w-1/3 h-screen bg-black text-white absolute top-0 right-0 z-10'>
                       <ImCross  onClick={handleAddtocart} className='text-white my-5 mx-8'/>
                       <ul className='flex justify-between py-3 px-8 border-b border-white text-lg font-semibold font-dm pb-4'>
                        <li className='w-[60px]'>Action</li>
                        <li className='w-[100px]'>Product</li>
                        <li className='w-[80px]'>Price</li>
                        <li>Quantity</li>
                        <li>SubTotal</li>
                       </ul>
                       {
                        data.length>0 
                        ?
                        <>
                        {
                           data.map(item=>(
                          <ul className='flex justify-between items-center py-3 px-8 border-b border-white'>
                            <li onClick={()=>handleCross(item)} className='w-[60px]'> <ImCross className='text-white text-xs ml-5'/></li>
                            <li className='w-[100px]'>{item.title.substring(0,18)}....</li>
                            <li className='w-[80px]'>{item.price}$</li>
                            <li className='border border-white py-2 px-4 flex gap-x-4 w-[90px] cursor-pointer'>
                              <span onClick={()=>handleDecrement(item)}>-</span>
                              <span>{item.quantity}</span>
                              <span onClick={()=>handleIncrement(item)}>+</span>
                            </li>
                            <li className='w-[50px]'>{item.quantity*item.price}$</li>
                          </ul>
                        ))
                        }
                        <div className="flex justify-center gap-x-4 mt-10">

                          <Link to="/cart">
                                 <Button className='bg-white !text-black hover:!bg-black hover:!text-white hover:!border-white' text="View Cart"/>
                          </Link>
                          <Link to='/checkout'>
                                 <Button className='bg-white !text-black hover:!bg-black hover:!text-white hover:!border-white' text="Checkout"/>
                          </Link>
                        </div>
                        
                        </>

                       
                         :
                         <h3 className='text-white text-3xl text-center mt-[200px] font-dm font-bold'>Cart is Empty</h3>
                       }

                      

                       <h3 className='text-2xl text-white font-dm font-bold absolute right-5 bottom-5'>Total:{total}$</h3>
                    </div>
                     
                  }

                
                </div>

            </Flex>

        </Container>
    </section>
  )
}

export default Siderber