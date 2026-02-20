import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
    <div className='w-full h-[70vh] bg-[url(/cars.jpg)] bg-cover bg-center bg-fixed'>
          <div className='w-full h-[70vh] bg-[rgba(0,0,0,0.3)] flex justify-center items-center'>
            <div className='w-[50%] text-white text-center'>
              <div><h1 className="text-5xl ">Welcome to vehicle rental app</h1></div>
              <div className='mt-5'><Link to={'/home'} className='text-2xl text-black mt-5 border border-white rounded px-5 bg-stone-100 hover:bg-stone-900 hover:text-white'>Let's GO</Link></div>
           </div>
          </div>
        </div>
    </>
  )
}

export default Landing