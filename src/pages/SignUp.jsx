import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import Button from '../components/Button'

const SignUp = () => {
  return (
    <section className='py-[130px]'>
      <Container>
      <div className='border-b border-[#F0F0F0] pb-[60px] mb-[60px]'>
        <p className='text-primary text-base font-dm font-normal w-[644px] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
      </div>
      <Heading text="Your Personal Details"/>
      <Flex className='gap-x-10 flex-wrap border-b border-[#F0F0F0] pb-[70px]'>
            <div className='w-[507px] mt-10 mb-7'>
                <label className='text-base text-secondary font-dm font-bold' for="fristname">First Name<br />
                    <input className='py-4 border-b border-[#F0F0F0] w-full' id='fristname' type="text" placeholder='First Name'/>
                  </label>
            </div>
            <div className='w-[507px] mt-10 mb-7'>
                <label className='text-base text-secondary font-dm font-bold' for="lastname">Last Name<br />
                    <input className='py-4 border-b border-[#F0F0F0] w-full' id='lastname' type="text" placeholder='Last Name'/>
                  </label>
            </div>
            <div className='w-[507px]'>
                <label className='text-base text-secondary font-dm font-bold' for="email">Email address<br />
                    <input className='py-4 border-b border-[#F0F0F0] w-full' id='email' type="text" placeholder='company@domain.com'/>
                  </label>
            </div>
            <div className='w-[507px]'>
                <label className='text-base text-secondary font-dm font-bold' for="telephone">Telephone<br />
                    <input className='py-4 border-b border-[#F0F0F0] w-full' id='telephone' type="text" placeholder='Your phone number'/>
                  </label>
            </div>
      </Flex>


      <Heading className='pt-12' text="New Customer"/>
      <Flex className='gap-x-10 flex-wrap border-b border-[#F0F0F0] pb-[70px]'>
            <div className='w-[507px] mt-10 mb-7'>
                <label className='text-base text-secondary font-dm font-bold' for="address1">Address 1<br />
                    <input className='py-4 border-b border-[#F0F0F0] w-full' id='address1' type="text" placeholder='4279 Zboncak Port Suite 6212'/>
                  </label>
            </div>
            <div className='w-[507px] mt-10 mb-7'>
                <label className='text-base text-secondary font-dm font-bold' for="address2">Address 2<br />
                    <input className='py-4 border-b border-[#F0F0F0] w-full' id='address2' type="text" placeholder="----"/>
                  </label>
            </div>
            <div className='w-[507px]'>
                <label className='text-base text-secondary font-dm font-bold' for="city">City<br />
                    <input className='py-4 border-b border-[#F0F0F0] w-full' id='city' type="text" placeholder='Your city'/>
                  </label>
            </div>
            <div className='w-[507px]'>
                <label className='text-base text-secondary font-dm font-bold' for="postcode">Post Code<br />
                    <input className='py-4 border-b border-[#F0F0F0] w-full' id='postcode' type="text" placeholder='05228'/>
                  </label>
            </div>
            <div className='w-[507px] py-6'>
              <label className='text-base text-secondary font-dm font-bold' for="country">Country <br />
              <select className='py-[10px] border-b border-[#F0F0F0] w-full text-sm text-primary font-dm font-normal' id='country'>
                 <option value="01">Please select</option>
                 <option value="bangladesh">bangladesh</option>
                 <option value="nepal">nepal</option>
                 <option value="pakistan">pakistan</option>
              </select>
              </label>
                
            </div>
            <div className='w-[507px] py-6'>
              <label className='text-base text-secondary font-dm font-bold' for="country">Region/State <br />
              <select className='py-[10px] border-b border-[#F0F0F0] w-full text-sm text-primary font-dm font-normal' id='country'>
                 <option value="01">Please select</option>
                 <option value="bangladesh">dhaka</option>
                 <option value="nepal">sylhet</option>
                 <option value="pakistan">narsingdi</option>
              </select>
              </label>
                
            </div>
           
      </Flex>


      <Heading className='pt-12' text="Your Password"/>
      <Flex className='gap-x-10 flex-wrap border-b border-[#F0F0F0] pb-[70px]'>
            <div className='w-[507px] mt-10 mb-7'>
                <label className='text-base text-secondary font-dm font-bold' for="password1">Password<br />
                    <input className='py-4 border-b border-[#F0F0F0] w-full' id='password1' type="type" placeholder='Your Password'/>
                  </label>
            </div>
            <div className='w-[507px] mt-10 mb-7'>
                <label className='text-base text-secondary font-dm font-bold' for="password2">Repeat password<br />
                    <input className='py-4 border-b border-[#F0F0F0] w-full' id='password2' type="type" placeholder="Repeat Password"/>
                  </label>
            </div>
            
           
      </Flex>

      <div className='relative mt-[65px]'>
         <label className='ml-10 text-sm text-primary font-dm font-normal' for="iagrre">
         <input className='pr-10 absolute top-1/2 left-0 -translate-1/2' id="iagrre" type="checkbox" />
          I have read and agree to the Privacy Policy
         </label>
      </div>
     <div className='text-sm text-primary font-dm font-normal pt-[30px]'>
       Subscribe Newsletter
          <div className='relative mt-[65px] inline ml-[30px] '>
            <label className='ml-4 text-sm text-primary font-dm font-normal' for="yes">
            <input className='pr-10 absolute top-1/2 left-0 -translate-1/2' id="yes" type="checkbox" />
            Yes
            </label>
          </div>
          <div className='relative mt-[65px] inline'>
            <label className='ml-4 text-sm text-primary font-dm font-normal' for="no">
            <input className='pr-10 absolute top-1/2 left-0 -translate-1/2' id="no" type="checkbox" />
            No
            </label>
          </div>
     </div>
      
      <br />

      <Button className='mt-7' text="Log in"/>
          
      </Container>
    </section>
  )
}

export default SignUp