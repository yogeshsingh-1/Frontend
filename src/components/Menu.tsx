// import React from 'react'
import { Link } from 'react-router-dom'
import home from './home.webp'
const Menu = () => {
  return (
    <div className='bg-[#F7F4ED] w-full h-[calc(100vh-58px-59px)]   border-b border-black grid grid-cols-12'>
      <div className="hidden 2xl:block 2xl:col-span-2 h-full "></div>
      <div className="h-full col-span-12 lg:col-span-8 2xl:col-span-6   ">
        <div className="h-full ">
          <div className="h-full flex flex-col justify-center gap-2  lg:gap-4 ml-[80px]">
            <div className=' font-[px] font-[500] xl:leading-[110px]'>
              <h2 className='text-6xl md:text-8xl xl:text-9xl'>
                Human
                <br />
                stories & ideas
              </h2>
            </div>
            <div className='mt-2 md:mt-3 text-[20px]'>
              <p>A place to read,write and deepend your understanding</p>
            </div>
            <div className='mt-3 md:mt-4'>
              <Link to="/user/blogs">
              <button className='bg-green-700 lg:bg-black text-white px-10 py-2 md:px-[34px] lg:py-[10px] rounded-3xl text-xl object-cover'>Start reading</button>
              </Link>
            </div>
          </div>

        </div>
      </div>
      <div className="hidden  lg:block lg:col-span-4 2xl:col-span-4 h-full  overflow-hidden"><img src={home} alt="" className='w-full h-full float-right  ' /></div>

    </div>
  )
}

export default Menu