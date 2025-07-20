import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-40 px-20'>
          {["We Create", "Eye Opening", "Presentatios"].map((item,index)=>{
            return <div className=' masker '>
              <div className='w-fit flex items-center'>
                
                {index==1 && (<div className='w-[15vw] h-[7vw] relative mr-5 bg-blue-500 flex-shrink-0 rounded-md'></div>)}
                <h1 className='uppercase text-[7.5vw] leading-[7.5vw] h-full tracking-tighter font-semibold'>{item} </h1>
            </div>
             </div>
          })}
        </div>

        <div className='border-t-[1px] border-zinc-700 mt-20 flex justify-between items-center py-5 px-20'> 
           {[
            "For public and private companies",
            "From the first pitch to IPO"
           ].map((item,index)=>(
            <p className='text-md font-light tracking-tighter leading-none'>{item}</p>
           ))}

           <div className='start flex items-center gap-5 '>
            <div className=" px-5 py-2 border-[1px] border-zinc-400 font-light text-md uppercase capitalize rounded-full">Start the project</div>
            <div className='w-10 h-10 flex items-center justify-center border-[2px] border-zinc-500 rounded-full'>
              <FaArrowUpLong/>
            </div>
           </div>
        </div>
    </div>
  )
}

export default LandingPage