import { useRef, useState } from 'react'

import './App.css'

function App() {
  

  // ugly way 
  // function focusOnInput(){
  //   document.getElementById("name").focus()
  // }

  //better way
  const inputRef = useRef();



  return  <div>
        Sign up
        <input ref={inputRef} id="name" type="text" />
        <input type="text" />
       <button onClick={focusOnInput}>submit</button>
      </div>
      
    
  
}

export default App
