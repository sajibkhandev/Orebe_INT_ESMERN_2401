import React from 'react'
import { FiPlus } from 'react-icons/fi'
import Flex from './Flex'

const SubCategory = ({text,className,type}) => {
    let hanldeSubCategory=()=>{
        console.log("ok");
        
    }
  return (
    <Flex className={`items-center justify-between py-5 border-b border-[#e1e1e1] ${className}`}>
                <p>{text}</p>
                <div onClick={hanldeSubCategory}>
                    {
                    type=="true" && <FiPlus/>
                    }
                </div>
    </Flex>
  )
}

export default SubCategory