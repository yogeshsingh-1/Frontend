// import React from 'react'

import Appbar from "./Appbar"

const FullBlog = () => {
  return (
    <>
    <Appbar/>
    <div className='grid gird-cols-12 px-10 w-full bg-yellow-200 '>
        <div className="bg-red-200 col-span-8 ">
            <div className="text-3xl font-extrabold">
                {/* {title} */}
            </div>
        </div>
        <div className="bg-green-400 col-span-4"></div>
    </div>
    </>
  )
} 

export default FullBlog