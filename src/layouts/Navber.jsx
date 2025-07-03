import React from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import Logo from '../assets/logo.png'
import List from '../components/List'
import Flex from '../components/Flex'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { activeButton } from '../slices/breadcrumb'

const Navber = () => {
  let dispatch=useDispatch()

  let handleClick=(name)=>{
    dispatch(activeButton(name))
     
    
  }
  return (
    <nav className='py-8'>
        <Container>
          <Flex>
          <div className='w-4/12'>
               <Link to='/'> <Image src={Logo}/></Link>
            </div>
            <div className='w-8/12'>
                <ul className='flex gap-x-10'>
                   <Link onClick={()=>handleClick("Home")} to='/'> <List text="Home"/></Link>
                   <Link onClick={()=>handleClick("Shop")} to='/shop'> <List text="Shop"/></Link>
                   <Link onClick={()=>handleClick("About")} to='/about'> <List text="About"/></Link>
                   <Link onClick={()=>handleClick("Contact")} to='/contact'> <List text="Contacts"/></Link>
                   <Link onClick={()=>handleClick("Journal")} to='/journal'> <List text="Journal"/></Link>
                    
                    
                    
                    
                </ul>
               
            </div>
          </Flex>

        </Container>
    </nav>
  )
}

export default Navber