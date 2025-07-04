import React, { useEffect, useState } from 'react'
import Banner from '../layouts/Banner'
import Offer from '../layouts/Offer'
import Heading from '../components/Heading'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Cart from '../components/Cart'
import ProductImage from '../assets/product.png'
import ProductImage2 from '../assets/product2.png'
import Pomotion from '../assets/pomotion.png'
import Image from '../components/Image'

import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import NextArrow from '../components/NextArrow'
import PrevArrow from '../components/PrevArrow'
import axios from 'axios'



const Home = () => {

   let [allData,setAllData]=useState([])

   var settings = {
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
   
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>
  };


  useEffect(()=>{

   async function alldata(){
      let data=await axios.get("https://dummyjson.com/products")
      setAllData(data.data.products);

   }
   alldata()
   

  },[])


  return (
    <div>
      <Banner/>
      <Offer/>
      <Container>
         <Heading text="New Arrivals" className='pb-12' />
         <Slider {...settings}>
       {
         allData.map(item=>(
             <div>
                <Cart src={item.thumbnail} title={item.title} price="30"/>
            </div>
            
         ))
       }
      
    </Slider>

        <Heading text="Our Bestsellers" className='pb-12' />
        <Flex className='justify-between   pb-[118px]'>
              {
               allData.map((item,index)=>(
                 (index>=4 && index<8) &&
                  <Cart src={item.thumbnail} title={item.title} price={item.price}/>

               ))
              }
        </Flex>

        <Image className='mb-[128px]' src={Pomotion}/>

        <Heading text="Special Offers"/>
        <Flex className='justify-between   pt-12 pb-[140px]'>
               {
               allData.map((item,index)=>(
                 (index>=8 && index<12) &&
                  <Cart src={item.thumbnail} title={item.title} price={item.price}/>

               ))
              }
        </Flex>


         
        
      </Container>
      
    </div>
  )
}

export default Home