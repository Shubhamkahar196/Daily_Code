
import { useState } from 'react';
import './App.css'

function App() {
 

  return (
    <>
      <div>
        <p>hii there</p>
      </div>
      <Counter></Counter>
    </>
  )
}



function Counter(){

  const [ count, setCount] = useState(0);


function increaseCount(){
    setCount(count + 1);
}

function decreaseCount(){
  setCount(count - 1);
}

function resetCount(){
  setCount(0);
}

  return <div>
    <h1 id='text'>{count}</h1>
    <button onClick={increaseCount}>Increase count</button>
    <button onClick={decreaseCount}>Decrease count</button>
    <button onClick={resetCount}>reset count</button>
  </div>
}

export default App
