import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { FaUser } from "react-icons/fa";


function Header() {
  const[menuState,setMenuState]=useState(false)
  return (
    <>
    <div className="grid grid-cols-3 p-3 bg-stone-900">
      <div className="flex items-center gap-5">
        <img src="logo.png" alt="logo" className='w-[60px] h-60px' />
        <Link to={'/'} className="text-2xl text-white font-bold md:hidden hover:text-stone-700">VEHICLE RENTAL APP</Link>
      </div>
      <div className="md:flex justify-center items-center hidden">
        <Link to={'/'} className="text-3xl text-white font-bold hover:text-stone-700">VEHICLE RENTAL APP</Link>
      </div>
      <div className="flex justify-end items-center gap-2 text-white ">
        <Link to={'/login'}>
        <button className='flex items-center border border-white text-white rounded px-2 py-2 hover:bg-stone-700 hover:text-white'>
          <FaUser />  
          Login
        </button>
        </Link>
      </div>
    </div>
    </>
  )
}

export default Header