import React from 'react'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  return (
    <div className=''>
      <nav className='mb-20 flex items-center justify-between border-b border-neutral-800 '>
        <div className='flex flex-shrink-0 items-center'>
          <h1 className='text-white text-[40px] md:text-[50px]'>
            A<span>s</span>
          </h1>
        </div>
        <div className='text-white flex items-center justify-center md:gap-2 gap-1 '>
          <div>
            <ThemeToggle/>
          </div>
            <div className="p-[2px] bg-gradient-to-r from-purple-200 via-pink-500 to-red-500 rounded-md mx-[3px] md:mx-[5px]">
              <a href="#" className="block bg-black rounded-md p-[8px] md:p-[10px]">
                <i className="ri-github-line text-[16px] md:text-[18px]"></i>
              </a>
            </div>

            
            <div className="p-[2px] bg-gradient-to-r from-purple-200 via-pink-500 to-red-500 rounded-md mx-[3px] md:mx-[5px]">
              <a href="#" className="block bg-black rounded-md p-[8px] md:p-[10px]">
                <i className="ri-linkedin-line text-[16px] md:text-[18px]"></i>
              </a>
            </div>
            
      
            <div className="p-[2px] bg-gradient-to-r from-purple-200 via-pink-500 to-red-500 rounded-md mx-[3px] md:mx-[5px]">
              <a href="#" className="block bg-black rounded-md p-[8px] md:p-[10px]">
                <i className="ri-mail-line text-[16px] md:text-[18px]"></i>
              </a>
            </div>

          
            <div className="p-[2px] bg-gradient-to-r from-purple-200 via-pink-500 to-red-500 rounded-md mx-[3px] md:mx-[5px]">
              <a href="#" className="block bg-black rounded-md p-[8px] md:p-[10px]">
                <i className="ri-file-download-line text-[16px] md:text-[18px]"></i>
              </a>
            </div>

            

        </div>
      </nav>
    </div>
  )
}

export default Navbar