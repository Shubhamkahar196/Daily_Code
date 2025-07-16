import { useState,useEffect } from 'react'

import './App.css'

function App() {
  const [input, setInput] = useState()
  const [display, setDisplay] = useState();

  useEffect(()=>{
    
  })

  return (
   <div>

    <div>
           <h1>Chat app</h1>
     <input type="text" placeholder='enter you name' />
     <button onClick={ ()=>{}}>Submit</button>
    </div>
    
       <div>
            <h2>Adding your room id</h2>
          <input type="text" placeholder='adding your room id' />
           <button onClick={()=>{}}>Submit</button>
       </div>
      
   </div>
  )
}

export default App
