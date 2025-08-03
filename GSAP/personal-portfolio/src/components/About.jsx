import React from 'react'
import about from '../assets/images/about.png'
const About = () => {
  return (
    <div className='border-b border-neutral-800 pb-4'>
        <h1 className='my-10 text-center text-white text-4xl'>
            About Me
        </h1>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2 lg:p-6'>
                <div className='flex items-center justify-center'>
                    <img src={about} alt="" className="rounded-2xl w-[50%]" />
                </div>
            </div>
            <div className='w-full lg:w-1/2 '>
                <div className='flex justify-center lg:justify-start'>
                    <p className='text-white my-4  p-6 '>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eum error dicta tenetur earum quo obcaecati fuga illum. Hic dolor temporibus obcaecati asperiores eius tempora quod libero soluta qui suscipit officia, adipisci iure repellendus. Cupiditate quo aliquid neque ullam amet minus ea, aliquam deserunt, non laborum repellat corporis similique laudantium..
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About