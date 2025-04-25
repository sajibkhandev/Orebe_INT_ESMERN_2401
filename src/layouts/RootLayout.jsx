import React from 'react'
import Navber from './Navber'
import Siderber from './Siderber'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const RootLayout = () => {
  return (
    <>
    <Navber/>
    <Siderber/>
    <Outlet/>
    <Footer/>

    </>
  )
}

export default RootLayout