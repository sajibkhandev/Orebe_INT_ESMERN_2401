import React from 'react'
import Flex from './Flex'
import { FiPlus } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { categoryFunciton } from '../slices/categorySlice'

const Category = ({text,type,type2,className}) => {

    let dispatch=useDispatch()
    let hanldeCategory=()=>{
      dispatch(categoryFunciton(true))
    }
    
  return (
     <Flex className={`items-center justify-between py-5 border-b border-[#e1e1e1] ${className}`}>
                <p>{text}</p>
                
                    {
                    type=="true" && (type2!="true" ? <FiPlus onClick={hanldeCategory}/>: "-")
                    }
               
    </Flex>
  )
}

export default Category