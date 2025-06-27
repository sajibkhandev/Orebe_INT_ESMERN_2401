import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Button from '../components/Button'
import Product3 from '../assets/product3.png'
import { ImCross } from 'react-icons/im'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, removeitem } from '../slices/addtocart'
import { Link } from 'react-router-dom'

const Cart = () => {
  let dispatch=useDispatch()
  let data=useSelector((state)=>state.addtocart.value)
  let [total,setTotal]=useState(0)
  

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
        let subtotal=0
        data.map(item=>{
          total+=item.quantity*item.price
         
        })
        setTotal(total)
        
        

      },[data])
  
  
  return (
    <section className='py-[140px] '>
       <Container>
          <ul className='flex  py-[34px] bg-[#F5F5F3] px-5 text-seconary text-base font-dm font-bold'>
            <li className='w-[160px]'>Actions</li>
            <li className='w-[160px]'>Images</li>
            <li className='w-[500px]'>Product</li>
            <li className='w-[50px] '>Price</li>
            <li className='w-[100px] ml-[170px]'>Quantity</li>
            <li className='w-[50px] ml-[200px]'>SubTotal</li>
          </ul>
          {
            data.map(item=>(
              <ul className='flex items-center py-8 border border-[#F5F5F3] cursor-pointer'>
                <li onClick={()=>handleCross(item)} className='w-[100px] pl-5'><ImCross /></li>
                <li className='w-[200px] px-10'><Image className='w-[100px]' src={item.image}/></li>
                <li className='w-[500px] px-10 text-secondary text-base font-dm font-bold'>{item.title}</li>
                <li className='w-[50px] px-10 text-secondary text-xl font-dm font-bold'>${item.price}</li>
                <li className='w-[100px] ml-[170px] border border-[#F0F0F0] flex justify-between px-4 py-2  text-primary text-sm font-dm font-normal'>
                  <span onClick={()=>handleDecrement(item)}>-</span>
                  <span>{item.quantity}</span>
                  <span onClick={()=>handleIncrement(item)}>+</span>
                </li>
                <li className='w-[50px] ml-[200px] text-secondary text-xl font-dm font-bold'>${item.quantity*item.price}</li>
              </ul>

            ))
          }

          <ul className='flex items-center py-[30px] border border-[#F5F5F3]'>
            <li className='pl-5'>
              <select className='py-2 px-10 border border-[#F5F5F3]'>
                 <option value="">SIZE</option>
                 <option value="">L</option>
                 <option value="">M</option>
                 <option value="">S</option>
              </select>
            </li>
            <li className='pl-[30px] text-sm text-secondary font-dm font-bold'>Apply coupon</li>
            <li className='pl-[1200px] text-sm text-secondary font-dm font-bold'>Update cart</li>
          </ul>

          <h4 className='text-xl text-secondary font-dm font-bold text-end pt-[54px] pb-6'>Cart totals</h4>

          <div className='w-[644px] border border-[#F5F5F5] ml-auto'>
            <Flex className='border-b border-[#F5F5F5] '>
            <p className='border-r border-[#F5F5F5] pl-5 pr-[200px] py-4 text-base text-secondary font-dm font-bold'>Subtotal</p>
            <p className=' pl-5 pr-[200px] py-4 text-base text-primary font-dm font-normal'>{total} $</p>
            </Flex>
            <Flex className='border-b border-[#F5F5F5] '>
            <p className='border-r border-[#F5F5F5] pl-5 pr-[228px] py-4 text-base text-secondary font-dm font-bold'>Total</p>
            <p className=' pl-5 pr-[200px] py-4 text-base text-primary font-dm font-normal'>{total}$</p>
            </Flex>
           

          </div>

          <div className='text-end pt-[30px]'>
          <Link to='/checkout'>
          <Button text='Proceed to Checkout'/>
          </Link>
          </div>
       </Container>
    </section>
  )
}

export default Cart