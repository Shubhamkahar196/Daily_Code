import { useState } from 'react'

import './App.css'
import { usePrev } from './hook/use-prev'

function App() {
  const[ state, setState] = useState(0);
 const prev = usePrev(state);   // they store previous value

  return (
    <>
      <div>
        <p>{state}</p>
       <button onClick={()=> setState(curr => curr + 1)}>CLick me</button>
       <p>Previous value{prev}</p>
        </div>
    </>
  )
}

export default App
