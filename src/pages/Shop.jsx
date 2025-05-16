import React, { useRef} from 'react'
import Container from '../components/Container'
const Shop = () => {

   let showRef=useRef(null)

   let handleClick=()=>{
    if(showRef.current.style.display=="block"){
       showRef.current.style.display="none"
    }else{
      showRef.current.style.display="block"
    }
   }
  return (
    <Container>
      <button onClick={handleClick} className='bg-red-500 py-3 px-5'>Open</button>
      <ul ref={showRef} className='hidden'>
        <li>home</li>
        <li>about</li>
        <li>contact</li>
        <li>service</li>
      </ul>
    </Container>
  )
}

export default Shop