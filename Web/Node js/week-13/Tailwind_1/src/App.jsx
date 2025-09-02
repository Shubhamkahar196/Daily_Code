import React from 'react'
import FlexExample from './components/FlexExample'
import GridExample from './components/GridExample'
import { Button } from './components/Project/Button'
import {Input} from './components/Project/Input'
import {Otp} from './components/Project/Otp'
import './App.css'

function App() {
  

  return (
    <>
        <div className=' h-screen bg-blue-700'>
          {/* <FlexExample/> */}
          {/* <GridExample/> */}
          {/* <input type="text" placeholder='username' />
          <br /><br /><br />
          <Button disabled={false}>SIgn up</Button> */}
          <Otp/>
        </div>
      
    </>
  )
}

export default App
