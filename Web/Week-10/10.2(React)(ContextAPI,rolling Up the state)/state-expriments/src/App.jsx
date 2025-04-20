
import { useState } from 'react'
import './App.css'

function App() {
  
  return <div>
    <LightBulb />
  </div>
}

function LightBulb() {
  const [bulbOn, setBulbOn] = useState(true)

  return <div>   
    <BulbState bulbOn={bulbOn} />   // this running blub
    <ToggleBulbState bulbOn={bulbOn} setBulbOn={setBulbOn} />  // this is for button
  </div>
}

function BulbState({bulbOn}) {
  return <div>
    {bulbOn ? "Bulb on" : "Bulb off"}
  </div>
}

function ToggleBulbState({bulbOn, setBulbOn}) {

   function toggle(){
//     // one way 
//   //   setBulbOn(currentState =>!currentState)

//   // second way 

//   // setBulbOn(function(currentState){
//   //   if(currentState == true){
//   //     return false;
//   //   }else{
//   //     return true
//   //   }
//   // })

//   // third way 
  setBulbOn(!bulbOn)   // this line change true to flase and false to true
  }

  return <div>
    <button onClick={toggle}>Toggle the bulb</button>
  </div>
}

export default App
