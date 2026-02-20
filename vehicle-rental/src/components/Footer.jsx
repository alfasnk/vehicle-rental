import React from 'react'
import { FaArrowRight } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";





function Footer() {
  return (
    <>
      <div className="md:grid grid-cols-3 md:gap-9 bg-stone-900 text-white p-10">
        <div>
          <h4 className="font-bold">ABOUT US</h4>
          <p className="text-justify mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio placeat consectetur, pariatur officia sed doloremque corporis quam animi totam,
            eveniet maxime expedita voluptas sapiente at, veritatis nostrum dignissimos nisi distinctio?
          </p>
        </div>
        <div>
          <h4 className='font-bold'>TERMS OF USE</h4>
          <p className='text-justify mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore vel doloribus assumenda officiis quaerat itaque repellendus ullam sit dolor eum? Quasi quod quisquam animi sed ratione porro natus in eaque?
          </p>
          
        </div>
        <div>
          <h4 className="font-bold">FOLLOW US</h4>
          <p className="my-5">Let us be social</p>
          <div className="flex gap-2">
            <FaInstagram />
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
      </div>
      <div className="bg-stone-700 p-2 text-center text-white text-xs">
        Copyright &copy; 2026 Allrights Reserved | This Website is made by <FaHeart className='inline text-stone-200' />ALFAS

      </div>
    </>
  )
}

export default Footer