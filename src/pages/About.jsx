import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Product2 from '../assets/product2.png'
import Product1 from '../assets/product.png'
import AboutBlog from '../components/AboutBlog'

const About = () => {
  return (
   <section>
    <Container>
      <Flex className='justify-between pt-[135px] pb-[128px]'>
      <div className='w-[48%] relative'>
        <Image className='w-full' src={Product2}/>
        <button className='bg-black py-7 px-[97px] text-white text-base font-dm font-normal absolute bottom-10 left-1/2 -translate-x-1/2'>Our Brands</button>
      </div>
      <div className='w-[48%] relative'>
        <Image className='w-full' src={Product1}/>
        <button className='bg-black py-7 px-[97px] text-white text-base font-dm font-normal absolute bottom-10 left-1/2 -translate-x-1/2'>Our Stores</button>
      </div>
      </Flex>
      <p className='text-[39px] text-secondary font-dm font-normal'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</p>

      <Flex className='justify-between pt-[118px] pb-[131px]'>
        <AboutBlog title="Our Vision" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book."/>
        <AboutBlog title="Our Story" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book."/>
        <AboutBlog title="Our Brands" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book."/>

      </Flex>

    </Container>
   </section>
  )
}

export default About