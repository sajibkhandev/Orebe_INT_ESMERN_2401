import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

const NextArrow = ({className, style, onClick}) => {
    
    
  return (
   <div
      className={`${className} absolute z-10 top-[43%] -translate-y-1/2 right-0 bg-[#979797] w-[64px] h-[64px] rounded-full flex justify-center items-center`} 
      onClick={onClick}
      >
      <FaLongArrowAltRight className='text-white'/>


    </div>
  )
}

export default NextArrow