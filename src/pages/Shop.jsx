import React, { useState } from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'



const Shop = () => {

  let data=useSelector((state)=>state.breadcrumb.preavalue)
 
  
 
    

  
  return (
    <section className='py-[128px]'>
      <Container>

        <Heading text="Shop" className='text-[49px]'/>
         <p> <Link to={data=="Home"?"/" :`/${data}`}>{data}</Link>  >  shop</p>
      
    
     
    </Container>
    </section>
  )
}

export default Shop