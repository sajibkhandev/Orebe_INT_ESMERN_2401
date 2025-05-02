import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Flex from '../components/Flex'
import Button from '../components/Button'

const Login = () => {
  return (
    <section className='py-[130px]'>
       <Container>
        <div className='border-b border-[#F0F0F0] pb-[60px] mb-[60px]'>
        <p className='text-primary text-base font-dm font-normal w-[644px] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
        </div>

        <Heading text="Returning Customer"/>

      <Flex className='gap-x-10'>
      <div className='w-[507px] mt-10 mb-7'>
          <label className='text-base text-secondary font-dm font-bold' for="email">Email address <br />
              <input className='py-4 border-b border-[#F0F0F0] w-full' id='email' type="text" placeholder='company@domain.com'/>
            </label>
       </div>
       <div className='w-[507px] mt-10 mb-7'>
          <label className='text-base text-secondary font-dm font-bold' for="email">Password  <br />
              <input className='py-4 border-b border-[#F0F0F0] w-full' id='email' type="password" placeholder='.........'/>
            </label>
       </div>
      </Flex>
      <div className='border-b border-[#F0F0F0] pb-[70px] mb-[52px]'>
      <Button  text='Log in'/>
      </div>


      <div>
          <Heading text="New Customer"/>
          <p className='pt-[38px] pb-[51px] text-primary text-base font-dm font-normal w-[644px] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
          <Button  text='Continue'/>
      </div>



       </Container>
    </section>
  )
}

export default Login