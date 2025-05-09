import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Flex from '../components/Flex'
import Button from '../components/Button'
import CheakoutTable from '../components/CheakoutTable'
import CheckoutInput from '../components/CheckoutInput'

const Checkout = () => {
  return (
    <section className='pt-[128px] pb-[170px]'>
       <Container>
        <Heading text="Checkout"/>
        <p>Home  >  Checkout</p>

        <p className='text-parimay text-base font-dm font-normal pt-[127px] pb-[119px]'>Have a coupon? <span className='text-secondary font-bold'>Click here to enter your code</span></p>

        <Heading className='pb-[42px]' text="Billing Details"/>

       <Flex className='gap-x-4'>
        <CheckoutInput labelText="First Name *" inputplayText="First Name" type={true} id="fristname"/>
        <CheckoutInput labelText="Last Name *" inputplayText="Last Name" type={true} id="lastname"/>
      
       </Flex>


        <CheckoutInput labelText="Companye Name (optional)" inputplayText="Company Name" type={false} id="company" inputClassName="w-[1053px]"/>

        <CheckoutInput labelText="Country *" inputplayText="Please select" type={true} id="company" inputClassName="w-[1053px]"/>

        <CheckoutInput labelText="Street Address *" inputplayText="House number and street name" type={true} id="company" inputClassName="w-[1053px]"/>
        <input className='w-[1053px] py-[10px] mb-6 border-b border-[#F0F0F0]' type="text" placeholder='Apartment, suite, unit etc. (optional)'/>
        <br />

        <CheckoutInput labelText="Country *" inputplayText="Please select" type={true} id="company" inputClassName="w-[1053px]"/>

        <CheckoutInput labelText="Country *" inputplayText="Please select" type={true} id="company" inputClassName="w-[1053px]"/>

        <CheckoutInput labelText="Country *" inputplayText="Please select" type={true} id="company" inputClassName="w-[1053px]"/>

        <CheckoutInput labelText="Country *" inputplayText="Please select" type={true} id="company" inputClassName="w-[1053px]"/>
      

        <h4 className='text-[39px] text-secondary font-dm font-bold pt-[122px] pb-12'>Your Order</h4>

        <div className='border border-[#F0F0F0] w-[644px] '>

          <CheakoutTable product='Product' price="Total"/>
          <CheakoutTable product='Product name x 1' price="389.99 $"/>
          <CheakoutTable product='Subtotal' price="389.99 $"/>
          <CheakoutTable product='Total' price="389.99 $" className="border-transparent"/>
        
        </div>

        <div className='border border-[#F0F0F0] w-[1054px] mt-[60px] pt-6 px-[34px] pb-8'>

              <label className='text-secondary text-base font-dm font-bold ' htmlFor="bank">
              <input className='mr-3' id="bank" type="radio" name="bank"/>Bank
              </label>
              <br />
              <input className='py-6 px-5 w-full bg-[#F0F0F0] mb-[26px]' type="text" placeholder='Pay via Bank; you can pay with your credit card if you don’t have a Bank account.'/>


              <label className='text-secondary text-base font-dm font-bold ' htmlFor="bank2">
              <input className='mr-3' id="bank2" type="radio" name="bank"/>Bank 2
              </label>
              <br />
              <input className='py-6 px-5 w-full ' type="text" placeholder='Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.'/>

              <Button text="Proceed to Bank"/>
        </div>
       </Container>
    </section>
  )
}

export default Checkout