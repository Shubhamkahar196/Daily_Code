import React from 'react'
import Navbar from './components/Navbar'

import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'

const App = () => {
  return (
    <div className='w-full  min-h-screen text-white bg-zinc-900 '>
      <Navbar/>
     <LandingPage/>
     <Marquee/>
     <About/>
    </div>
  )
}

export default App