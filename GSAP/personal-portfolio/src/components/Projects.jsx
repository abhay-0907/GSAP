import React from 'react'
import {projects} from '../constants/project-info'
const Projects = () => {
  return (
    <div className='border-b border-neutral-800 pb-2'>
        <h1 className='text-white text-4xl my-10 text-center'>
            Projects
        </h1>
        <div>
            {projects.map(function(project, idx){
                return <div key={idx} className='flex flex-wrap lg:justify-center mb-8'>
                <div className='w-full lg:w-1/4'>

                    <img src={project.img} height={250} width={250} alt="" className='mb-6 rounded-lg ' />
                </div>
                <div className='w-full max-w-xl lg:w-3/4'>
                <h6 className='text-white mb-2 font-semibold'>
                    {project.name}
                </h6>
                <p className='text-neutral-400 mb-2'>
                    {project.des}
                </p>
                {project.tech.map((t, i) => ( <span key={i} className='text-purple-800  bg-white mr-3 rounded px-2 py-1 text-sm font-medium mb-2 inline-block'> {t}</span> ))}
                </div>
                </div>
                
            })}
        </div>
    </div>
  )
}

export default Projects