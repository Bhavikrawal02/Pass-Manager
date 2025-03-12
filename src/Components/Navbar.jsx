import React from 'react'

const Navbar = () => {
  return (
    <div>
     <nav className='bg-gradient-to-r from-gray-800 via-black  to-gray-800  text-white flex justify-around px-4 py-5 text-xl'>
        <div className="logo">
            <span className='text-blue-500 font-bold'>&lt;</span>
            <span>MY</span> 
            <span className='text-blue-500 font-bold '> PASS/&gt;</span>
        </div>
        <div className="list flex gap-10">
            {/* <ul className='flex gap-5'>
                <li className='hover:font-bold hover:text-blue-500 transition-all'><a href="#">Home</a></li>
                <li className='hover:font-bold hover:text-blue-500 transition-all'><a href="#">About</a></li>
                <li className='hover:font-bold hover:text-blue-500 transition-all'><a href="#">Contact</a></li>
            </ul> */}
            <button className='flex gap-2 bg-blue-700 rounded-full cursor-pointer px-2'>
              <img className='w-8' src="Icons/github.png" alt="" />
              Github
            </button>
        </div>
     </nav>
    </div>
  )
}

export default Navbar
