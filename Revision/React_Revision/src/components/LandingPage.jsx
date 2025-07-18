import React from 'react'

const LandingPage = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-40 px-20'>
          {["We Create", "Eye Opening", "Presentatios"].map((item,index)=>{
            return <div className=' masker '>
                <h1 className='uppercase text-[7.5vw] leading-[6vw] tracking-tighter font-semibold'>{item} </h1>
            </div>
          })}
        </div>

        <div className='border-t-[1px] border-zinc-700 mt-32'> 

        </div>
    </div>
  )
}

export default LandingPage