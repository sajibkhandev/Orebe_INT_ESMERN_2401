import React, { useState } from 'react'
import Container from '../components/Container'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../slices/counterSlice'


const Shop = () => {
  let dispatch=useDispatch()
  let data=useSelector((state)=>state.name.value)
 

  let handleIncrement=()=>{
    dispatch(increment(10))
    

  }
  return (
    <Container>
      <button onClick={handleIncrement}>Increment</button>
      <h1>Counter {data}</h1>
    
     
    </Container>
  )
}

export default Shop