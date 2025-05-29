import React, { useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Pagination from '../components/Pagination'

const Shop = () => {

  let data=useSelector((state)=>state.breadcrumb.preavalue)
  
  return (
    <section className='py-[128px]'>
      <Container>
        <Heading text="Shop" className='text-[49px]'/>
         <p> <Link to={data=="Home"?"/" :`/${data}`}>{data}</Link>  >  shop</p>

        <Flex className='pt-[130px]'>
           <div className='w-3/12'>Shop by Category</div>
           <div className='w-9/12'>
                  <Pagination itemsPerPage={12} />
           </div>
        </Flex>
      
    
     
    </Container>
    </section>
  )
}

export default Shop