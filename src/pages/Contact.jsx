import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button'


const Contact = () => {
  return (
    <section className='py-[140px]'>
       <Container>
          <h4 className='text-[39px] text-secondary font-dm font-bold pb-[42px]'>Fill up a Form</h4>
          <label className='text-base text-secondary font-dm font-bold' htmlFor=""> Name: <br />
            <input className='border-b border-[#F0F0F0] mb-6 w-[48%] py-3' type="text" placeholder='Your name here'/>
          </label> <br />
          <label className='text-base text-secondary font-dm font-bold' htmlFor=""> Email: <br />
            <input className='border-b border-[#F0F0F0] mb-6 w-[48%] py-3' type="text" placeholder='Your Email here'/>
          </label><br />
          <label className='text-base text-secondary font-dm font-bold' htmlFor=""> Message: <br />
            <textarea className='border-b border-[#F0F0F0] mb-6 w-[48%] py-3' type="text" placeholder='Your Message here'/>
          </label><br />

          <Button text="Post"/>

          <iframe className='w-full h-[570px] pt-[140px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14608.79830880696!2d90.37086430795421!3d23.740261460985856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd36f%3A0xfcc5b021faff43ea!2sCreative%20IT%20Institute!5e0!3m2!1sen!2sbd!4v1745582136498!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
       </Container>
    </section>
  )
}

export default Contact