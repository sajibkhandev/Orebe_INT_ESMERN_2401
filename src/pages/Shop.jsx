import React, { useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Pagination from '../components/Pagination'
import Image from '../components/Image'
import DesignOne from '../assets/designone.png'
import DesignTwo from '../assets/designtwo.png'

const Shop = () => {
  let [showitem,setShowItem]=useState("6")
  let [change,setChange]=useState(false)

  let data=useSelector((state)=>state.breadcrumb.preavalue)

  let handleChange=(e)=>{
    setShowItem(e.target.value);

  }
  let handledesign=()=>{
    setChange(!change)

  }
  
  
  return (
    <section className='py-[128px]'>
      <Container>
        <Heading text="Shop" className='text-[49px]'/>
         <p> <Link to={data=="Home"?"/" :`/${data}`}>{data}</Link>  >  shop</p>

        <Flex className='pt-[130px]'>
           <div className='w-3/12'>Shop by Category</div>
           <div className='w-9/12'>
                  <Flex className='mb-[60px]'>
                      <div onClick={handledesign}>
                         <Flex className='gap-x-5 '>
                       <Image  src={DesignOne}/>
                       <Image  src={DesignTwo}/>
                      </Flex>
                      </div>

                      <Flex className='items-center gap-x-[14px] ml-[742px]'>
                        <p className='text-primary text-sm font-dm font-normal'>Sort by:</p>
                          <select className='py-1 px-4 border border-[#767676] text-primary text-sm font-dm font-normal'>
                            <option>Featured</option>
                            <option>l</option>
                            <option>M</option>
                            <option>S</option>
                          </select>
                      </Flex>

                      <Flex className='items-center gap-x-[14px] ml-[40px]'>
                        <p className='text-primary text-sm font-dm font-normal'>Show:</p>
                          <select onChange={handleChange} className='py-1 px-6 border border-[#767676] text-primary text-sm font-dm font-normal'>
                            <option>6</option>
                            <option>12</option>
                            <option>16</option>
                            <option>36</option>
                          </select>
                      </Flex>
                    </Flex>
                 {
                  change 
                  ?
                  <p>plz make a another pagination design and add here</p>
                  
                  :
                  <Pagination itemsPerPage={showitem==6?6:showitem==12?12 :showitem==16?16 :showitem==36?36:12 } />
                 }
           </div>
        </Flex>
      
    
     
    </Container>
    </section>
  )
}

export default Shop