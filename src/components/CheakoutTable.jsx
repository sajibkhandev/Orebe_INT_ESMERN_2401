import React from 'react'
import Flex from '../components/Flex'

const CheakoutTable = ({product,price,className}) => {
  return (
    <Flex className={`border-[#F0F0F0] border-b ${className}`}>
         <p className='w-[320px] py-6 px-5 border-[#F0F0F0] border-r text-secondary text-base font-dm font-bold'>{product}</p>
         <p className='w-[320px] py-6 px-5 text-primary text-base font-dm font-normal'>{price}</p>
    </Flex>
  )
}

export default CheakoutTable