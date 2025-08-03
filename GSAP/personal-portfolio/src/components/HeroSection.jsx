import React from 'react'
import profileImg from "../assets/images/profile.png"

import {motion} from "framer-motion";
const HeroSection = () => {
  return (
    <div className='border-b border-neutral-800 pb-2 lg:mb-10 lg:pb-4'>
        <div className='flex  flex-wrap '>
          <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start '>
            <motion.h1 
            initial={{ opacity: 0, x:-100 }}
            animate={{ opacity: 1, x:0 }}
            transition={{ duration: 0.5, delay:1 }}
            className='pb-8 text-4xl font-thin tracking-tight lg:mt-10 lg:text-6xl font-[poppins-regular] text-white'>
              Abhay Sharma
            </motion.h1>
            <span className='bg-gradient-to-r from-pink-400 via-slate-600 to-purple-600 bg-clip-text text-4xl tracking-tight text-transparent' >
              I'm Frontend Developer
            </span>
            <p className='my-2 max-w-xl py-6 font-light tracking-tighter font-[roboto-regular] text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis fugit, enim, veniam corporis optio, illo ad doloribus quis architecto nobis eos ut possimus ducimus! Voluptatem similique corrupti molestiae expedita totam?</p>
          </div>
          </div>

          {/* three model */}
          <div className='w-full lg:w-1/2'>
          <div className='flex justify-center'>
            <img src={profileImg} alt="" className="w-[316px]  "/>
          </div>
          </div>
        </div>
    </div>
  )
}

export default HeroSection