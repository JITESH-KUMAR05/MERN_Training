import React from 'react'
import { Outlet ,NavLink } from 'react-router'

const Technologies = () => {
  return (
    <div className=''>
      <h1 className='text-3xl text-center font-bold'>Welcome to Technologies Page</h1>
      <ul className='flex justify-around text-2xl bg-[#4c3c3c] text-white rounded-2xl p-2 m-2'>
        <li>
          <NavLink  className={({isActive})=>isActive? " text-orange-600":"" } to={"java"}>Java</NavLink>
        </li>
        <li>
          <NavLink  className={({isActive})=>isActive? " text-orange-600":"" } to={"nodejs"}>Node js</NavLink>
        </li>
        <li>
          <NavLink  className={({isActive})=>isActive? " text-orange-600":"" } to={"vue"}>Vue</NavLink>
        </li>
      </ul>
      {/* placeholder for childer of technologies */}
      <Outlet />
    </div>
  )
}

export default Technologies
