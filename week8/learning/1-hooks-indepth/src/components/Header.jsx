import React from 'react'
import { NavLink } from "react-router"

const Header = () => {
  return (
    <div>
      <nav className='bg-[#2f2626] text-white items-center flex gap-5 p-2 justify-between'>
        <img className='w-10 rounded-3xl ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdCiaERb1tvYWMKCwyX1PlmHjtyDF_6kAiSA&s" alt="" />
        <div className='flex gap-5 items-center text-xl justify-around px-10'>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"register"}>register</NavLink>
          <NavLink to={"login"}>login</NavLink>
          <NavLink to={"technologies"}>technologies</NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Header
