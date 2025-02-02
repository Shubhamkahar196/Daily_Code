
import { useState , useEffect} from 'react';
import './App.css'

//conditional rendering - kabhi kabhi render kr wana hai kabhi nhi like if-else
function App() {
 let counterVisible = true;

  return  <div>
    hii
        

         {counterVisible && <Counter></Counter>}
         hello
       </div>
 
}


//mounting, re-rendering, unmounting
function Counter(){

  const [ count, setCount] = useState(0);
 // hooking into the lifeCycle events of react
 console.log("counter");

 //gaurd out setInterval from re-renders
 useEffect(function(){
  setInterval(function(){
        setCount(count => count + 1);
      },1000)
      console.log("mounted");
 }, []);  // dependency array, cleanup, fetch inside useEffect


//  setInterval(function(){
//     setCount(count+1);
//   },1000)


// function increaseCount(){
//     setCount(count + 1);
// }

// function decreaseCount(){
//   setCount(count - 1);
// }

// function resetCount(){
//   setCount(0);
// }

  return <div>
    <h1 id='text'>{count}</h1>
    {/* <button onClick={increaseCount}>Increase count</button> */}
    {/* <button onClick={decreaseCount}>Decrease count</button> */}
    {/* <button onClick={resetCount}>reset count</button> */}
  </div>
}

export default App
