import { useState } from 'react'
import './App.css'
function App() {

  const [ count,setCount ] = useState(0)
// hooks :useState is a Hook that lets you add state to functional components.
//  It returns an array with the current state and a function to update it.

// state : A variable that stores a value. 
// In this case, count is a state variable that stores a number.
  return (
    <>
       <div> the count is {count}</div>
       <button onClick={()=>{setCount(count+1)}}>Update Count</button>
     
    </>
  )
}

export default App
