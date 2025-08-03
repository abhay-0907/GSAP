import React from 'react';
import { motion } from 'framer-motion';
import { techStack } from '../constants/tech-icons'; // adjust path as needed

const Technologies = () => {
  const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -8],
      transition: {
        duration: duration,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  });

  return (
    <div className='border-b border-neutral-800 pb-16 dark:[text-white]'>
      <h1 className='text-white text-4xl my-10 text-center'>Technologies</h1>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            variants={iconVariants(tech.duration)}
            initial="initial"
            animate="animate"
          >
            <tech.icon className='text-white text-4xl' />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
