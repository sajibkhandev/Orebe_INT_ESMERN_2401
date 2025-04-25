import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import List from '../components/List'
import Image from '../components/Image'
import FooterLogo from '../assets/footerlogo.png'

const Footer = () => {
  return (
    <footer className='bg-third py-[55px]'>
        <Container>
            <Flex>
                <div className='w-[15%]'>
                  <strong className='text-base text-secondary font-dm font-bold '>MENU</strong>
                <ul className='flex flex-col gap-y-[6px] pt-4'>
                    <List text="Home"/>
                    <List text="Shop"/>
                    <List text="About"/>
                    <List text="Contact"/>
                    <List text="Journal"/>
                </ul>



                </div>
                <div className='w-[15%]'>
                  <strong className='text-base text-secondary font-dm font-bold '>SHOP</strong>
                <ul className='flex flex-col gap-y-[6px] pt-4'>
                    <List text="Category 1"/>
                    <List text="Category 2"/>
                    <List text="Category 3"/>
                    <List text="Category 4"/>
                    <List text="Category 5"/>
                </ul>



                </div>
                <div className='w-[15%]'>
                  <strong className='text-base text-secondary font-dm font-bold '>HELP</strong>
                <ul className='flex flex-col gap-y-[6px] pt-4'>
                    <List text="Privacy Policy"/>
                    <List text="Terms & Conditions"/>
                    <List text="Special E-shop"/>
                    <List text="Shipping"/>
                    <List text="Secure Payments"/>
                </ul>

                </div>
                
                <div className='w-[25%]'>
                <strong className='text-base text-secondary font-dm font-bold block'>(052) 611-5711
                </strong>
                <strong className='text-base text-secondary font-dm font-bold '>company@domain.com
                </strong>
                <p className='text-sm text-primary font-dm font-normal pt-4'>575 Crescent Ave. Quakertown, PA 18951</p>
                </div>
                <div className='w-[30%]'>
                  <Image src={FooterLogo}/>
                </div>
            </Flex>

        </Container>

    </footer>
  )
}

export default Footer