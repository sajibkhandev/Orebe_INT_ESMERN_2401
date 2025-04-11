import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { FaBarsStaggered, FaUser } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { IoMdArrowDropdown } from 'react-icons/io';
import { FaShoppingCart } from 'react-icons/fa';


const Siderber = () => {
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
                            <FaShoppingCart className='ml-10 text-black'/>
                  </Flex>
                
                </div>

            </Flex>

        </Container>
    </section>
  )
}

export default Siderber