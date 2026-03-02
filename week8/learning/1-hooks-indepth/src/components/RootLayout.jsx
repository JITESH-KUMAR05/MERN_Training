import React from 'react'
import {Outlet} from 'react-router'
import Header from './Header'
import Footer from './Footer'

const RootLayout = () => {
  return (
    <div className=' w-full h-full flex flex-col justify-between'>
      <Header />

      {/* placeholder */}

      <div className='mx-20 min-h-screen py-5'>
        <Outlet />
      </div>

      <Footer />
    </div>
  )
}

export default RootLayout
