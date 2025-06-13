import React from 'react'
import Flex from './Flex'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { categoryFunciton } from '../slices/categorySlice'

const Category = ({text,type,className}) => {
    let category=useSelector((state)=>state.category.value)

    let dispatch=useDispatch()


    let hanldeMinus=()=>{
      dispatch(categoryFunciton(false))
    }
    
    let hanldePlus=()=>{
      dispatch(categoryFunciton(true))
    }
    
  return (
     <Flex className={`items-center justify-between py-5 border-b border-[#e1e1e1] ${className}`}>
                <p>{text}</p>
                {
                  type=="true"
                  ?
                   category 
                  ?
                  <FiMinus onClick={hanldeMinus}/>
                  :
                  <FiPlus onClick={hanldePlus}/>
                  :
                  ""
                }
                
               
    </Flex>
  )
}

export default Category