import React from 'react'
import { motion } from 'framer-motion'

const Marquee = () => {
  return (
    <div className='w-full py-20 rounded-3xl bg-[#004D43]'>
          <div className='text border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap '>
            <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration:5}}  className='text-[15vw] leading-none font-semibold font-mono uppercase relative -top-[0.05em] -bottom-[0.05em]' >we are Ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration:5}} className='text-[15vw] leading-none font-mono font-semibold uppercase relative -top-[0.05em] -bottom-[0.05em]'> we are Ochi</motion.h1>

          </div>
    </div>
  )
}

export default Marquee