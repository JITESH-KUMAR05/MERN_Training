import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'
import Footer from './Footer'

const RootLayout = () => {
  return (
    <div className=''>
      <Header />
      <div className='min-h-screen mx-20 my-10'>

        <Outlet />

      </div>
      <Footer />
    </div>
  )
}

export default RootLayout
