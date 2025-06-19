import React from 'react'
import Image from './Image'
import Flex from './Flex'
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import { FaCodeCompare } from 'react-icons/fa6'
import { useDispatch } from 'react-redux'
import { cartitem } from '../slices/addtocart'

const Product = ({src,title,price}) => {
  let dispatch=useDispatch()
  let handleAddToCart=()=>{
    dispatch(cartitem({
      title:title,
      price:price,
      image:src,
      quantity:1
      

    }))
    
  }
  return (
    <div className='w-[370px] relative group '>
        <div className='w-full h-[370px] relative overflow-hidden'>
            <Image className='w-full' src={src}/>
            <div className='group-hover:bottom-0 absolute -bottom-[42%] left-0 w-full h-[156px] bg-white duration-300'>
                <ul className='flex flex-col items-end px-[30px] py-6 gap-y-4'>
                    <li className='text-base text-primary font-dm font-normal'>Add to Wish List <FaHeart className='inline ml-4 text-sm cursor-pointer'/></li>
                    <li className='text-base text-primary font-dm font-normal'>Compare <FaCodeCompare className='inline ml-4 text-sm cursor-pointer'/></li>
                    <li onClick={handleAddToCart} className='text-base text-primary font-dm font-normal'>Add to Cart <FaShoppingCart className='inline ml-4 text-sm cursor-pointer'/></li>
                </ul>
            </div>
        </div>
       <Flex className='justify-between pb-[15px] pt-5'>
          <h4 className='text-xl text-secondary font-dm font-bold '>{title}</h4>
          <p className='text-base text-primary font-dm font-normal '>${price}</p>
       </Flex>
       <h6 className='text-base text-primary font-dm font-normal'>Black</h6>


       <button className='py-3 px-8 bg-black text-white text-sm font-dm font-normal absolute top-5 left-5'>New</button>

    </div>
  )
}

export default Product