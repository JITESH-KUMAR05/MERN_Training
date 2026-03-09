import React from 'react'
import { NavLink } from 'react-router'

const Header = () => {
  return (
    <div className='w-full'>
      <nav className='flex justify-between bg-black text-white p-3 '>
        <div>
            <img className='w-8 rounded-full h-8 sm:w-12.5 sm:h-12.5 object-cover ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7aio1A8-DCI6O_fLPR_tBgPQc6Xuxxr4Lfg&s" alt="" />
        </div>
        <div className='flex gap-5 items-center text-xl justify-around '>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"register"}>register</NavLink>
          <NavLink to={"login"}>login</NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Header
