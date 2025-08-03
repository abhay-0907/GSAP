import React from 'react'
import Navbar from '../components/Navbar'
import TitleText from '../components/TitleText'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Technologies from '../components/Technologies'
import Projects from '../components/Projects'
// import Contact from '../components/Contact'

const Page = () => {
  return (
      <div className='w-full h-auto bg-[#1d1d1d77] rounded-3xl p-8 md:p-12 dark:bg-white dark:text-black'>
          <Navbar/>
          <HeroSection/>
          <About/>
          <Technologies/>
          <Projects/>
          {/* <Contact/> */}
      </div>
  )
}

export default Page