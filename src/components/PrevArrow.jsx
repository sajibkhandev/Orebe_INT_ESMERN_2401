import React from 'react'
import { FaLongArrowAltLeft} from 'react-icons/fa'

const PrevArrow = ({className, style, onClick}) => {
  return (
   <div
         className={`${className} absolute top-[43%] -translate-y-1/2 left-0 bg-[#979797] w-[64px] h-[64px] rounded-full flex justify-center items-center`} 
         onClick={onClick}
         >
        <FaLongArrowAltLeft  className="text-white"/>

   
   
       </div>
  )
}

export default PrevArrow