// import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-[#F7F4ED] h-[59px] w-full '>
      <div className='w-full h-full flex items-center justify-center gap-4'>
        <Link className=" text-sm text-gray-500 font-[px]" to="/">Help</Link>
        <Link className="hidden lg:block text-sm text-gray-500 font-[px]" to="/">Status</Link>
        <Link className="hidden lg::block text-sm text-gray-500 font-[px]" to="/">About</Link>
        <Link className="hidden lg:block text-sm text-gray-500 font-[px]" to="/">Careers</Link>
        <Link className="hidden lg:block text-sm text-gray-500 font-[px]" to="/">Press</Link>
        <Link className="hidden lg:block text-sm text-gray-500 font-[px]" to="/">Blog</Link>
        <Link className="text-sm text-gray-500 font-[px]" to="/">Privacy</Link>
        <Link className=" text-sm text-gray-500 font-[px]" to="/">Rules</Link>
        <Link className=" text-sm text-gray-500 font-[px]" to="/">Terms</Link>
        <Link className="hidden lg:block text-sm text-gray-500 font-[px]" to="/">Text to speech</Link>
      </div>
    </div>
  )
}

export default Footer