import React from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import Button from '../components/Button'
import ErrorImage from '../assets/404.png'
import { CiSearch } from 'react-icons/ci'

const Error = () => {
  return (
    <section className='pt-20 pb-[140px]'>
      <Container>
        <Image src={ErrorImage}/>
        <p className='text-base text-primary font-dm font-normal w-[644px] pt-[50px]'>The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?</p>

        <div className='relative w-[643px] border border-[#F5F5F5] mt-[50px] mb-[60px]'>
          <input className='p-5 w-full' type="text" placeholder='Type to search'/>
          <CiSearch className='absolute top-1/2 right-6 -translate-y-1/2'/>

        </div>

        <Button text="Back to Home"/>
      </Container>
    </section>
  )
}

export default Error