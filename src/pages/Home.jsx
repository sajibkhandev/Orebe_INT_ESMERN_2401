import React from 'react'
import Banner from '../layouts/Banner'
import Offer from '../layouts/Offer'
import Heading from '../components/Heading'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Product from '../components/Product'
import ProductImage from '../assets/product.png'
import ProductImage2 from '../assets/product2.png'
import Pomotion from '../assets/pomotion.png'
import Image from '../components/Image'

import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import NextArrow from '../components/NextArrow'
import PrevArrow from '../components/PrevArrow'


const Home = () => {
   var settings = {
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
   
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>
  };
  return (
    <div>
      <Banner/>
      <Offer/>
      <Container>
         <Heading text="New Arrivals" className='pb-12' />
         <Slider {...settings}>
        <div>
           <Product src={ProductImage} title="Product one" price="30"/>
        </div>
        <div>
           <Product src={ProductImage2} title="Product one" price="30"/>
        </div>
        <div>
           <Product src={ProductImage} title="Product one" price="30"/>
        </div>
        <div>
           <Product src={ProductImage2} title="Product one" price="30"/>
        </div>
        <div>
           <Product src={ProductImage} title="Product one" price="30"/>
        </div>
       
        <div>
           <Product src={ProductImage2} title="Product one" price="30"/>
        </div>
       
        
        
      
    </Slider>

      

        <Heading text="Our Bestsellers" className='pb-12' />
        <Flex className='justify-between   pb-[118px]'>
              <Product src={ProductImage} title="Product one" price="30"/>
              <Product src={ProductImage2} title="Product two" price="20"/>
              <Product src={ProductImage} title="Product three" price="50"/>
              <Product src={ProductImage2} title="Product four" price="100"/>
        </Flex>

        <Image className='mb-[128px]' src={Pomotion}/>

        <Heading text="Special Offers"/>
        <Flex className='justify-between   pt-12 pb-[140px]'>
              <Product src={ProductImage} title="Product one" price="30"/>
              <Product src={ProductImage2} title="Product two" price="20"/>
              <Product src={ProductImage} title="Product three" price="50"/>
              <Product src={ProductImage2} title="Product four" price="100"/>
        </Flex>


         
        
      </Container>
      
    </div>
  )
}

export default Home