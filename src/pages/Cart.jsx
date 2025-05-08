import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Button from '../components/Button'
import Product3 from '../assets/product3.png'

const Cart = () => {
  return (
    <section className='py-[140px] '>
       <Container>
          <ul className='flex gap-x-[340px] py-[34px] bg-[#F5F5F3] px-5 text-seconary text-base font-dm font-bold'>
            <li>Product</li>
            <li>Price</li>
            <li>Quantity</li>
            <li>Total</li>
          </ul>
          <ul className='flex items-center py-8 border border-[#F5F5F3]'>
            <li className='px-3'>X</li>
            <li className='px-10'><Image src={Product3}/></li>
            <li className='px-10 text-secondary text-base font-dm font-bold'>Product One</li>
            <li className='px-10 text-secondary text-xl font-dm font-bold'>$44.00</li>
            <li className='ml-[270px] border border-[#F0F0F0] py-2 px-7 flex gap-x-6 text-primary text-sm font-dm font-normal'>
              <span>-</span>
              <span>1</span>
              <span>+</span>
            </li>
            <li className='ml-[270px] text-secondary text-xl font-dm font-bold'>$44.00</li>
          </ul>

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
            <p className=' pl-5 pr-[200px] py-4 text-base text-primary font-dm font-normal'>389.99 $</p>
            </Flex>
            <Flex className='border-b border-[#F5F5F5] '>
            <p className='border-r border-[#F5F5F5] pl-5 pr-[228px] py-4 text-base text-secondary font-dm font-bold'>Total</p>
            <p className=' pl-5 pr-[200px] py-4 text-base text-primary font-dm font-normal'>389.99 $</p>
            </Flex>
           

          </div>

          <div className='text-end pt-[30px]'>
          <Button text='Proceed to Checkout'/>
          </div>
       </Container>
    </section>
  )
}

export default Cart