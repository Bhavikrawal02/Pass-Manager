import React from 'react'

const Footercomp = () => {
  return (
    <div className='fixed text-white bottom-0 bg-gradient-to-r from-gray-800 via-black  to-gray-800 text-center  flex flex-col justify-around py-1 text-xl w-full '>
       <div className="logo">
            <span className='text-blue-500 font-bold'>&lt;</span>
            <span>MY</span> 
            <span className='text-blue-500 font-bold '> PASS/&gt;</span>
        </div>

        <div className='flex justify-center items-center '>

       <span>Created With </span>
        <img className='w-8' src="Icons/heart.png" alt="dfb" />
        By Bhavik

        </div>
    </div>
  )
}

export default Footercomp
