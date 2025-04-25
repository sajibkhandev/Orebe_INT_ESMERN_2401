import React from 'react'
import Image from '../components/Image'
import BannerImage from '../assets/banner.jpg'
import Container from '../components/Container'
import Flex from '../components/Flex'
import BannerIcon1 from '../assets/bannerIcon1.png'
import BannerIcon2 from '../assets/bannerIcon2.png'
import BannerIcon3 from '../assets/bannerIcon3.png'


const Banner = () => {
  return (
    < section className='border-b border-[#F0F0F0]'>
    <Image className='w-full' src={BannerImage}/>
   <Container>
   <Flex className='justify-between'>

            <Flex className='items-center gap-x-4 py-[30px]'>
                    <Image src={BannerIcon1}/>
                    <p className='text-base text-[#6D6D6D] text-dm text-normal'>Two years warranty</p>
                </Flex>
                <Flex className='items-center gap-x-4 py-[30px]'>
                    <Image src={BannerIcon2}/>
                    <p className='text-base text-[#6D6D6D] text-dm text-normal'>Free shipping</p>
                </Flex>
                <Flex className='items-center gap-x-4 py-[30px]'>
                    <Image src={BannerIcon3}/>
                    <p className='text-base text-[#6D6D6D] text-dm text-normal'>Return policy in 30 days</p>
                </Flex>


   </Flex>

   </Container>
    </section>
   
  )
}

export default Banner