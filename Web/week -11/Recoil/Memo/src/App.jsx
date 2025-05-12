import React,{useState,useEffect,memo} from 'react'

// memo : - A way to cache a component's output so it's not re-rendered unnecessarily, improving
//  performance by only updating when props change.

// memo in simple language

// Imagine you're cooking a meal

// - You make a big effort to prepare the meal (like rendering a component).
// - If nothing changes (like the ingredients or recipe), you don't need to cook the meal again.
// - React.memo is like a "cached meal" that remembers the previous result, so it doesn't need to re-cook (re-render) if nothing has changed.

// This helps make your app faster and more efficient!


const App = () => {
  return (
    <div><Counter/></div>
  )
}


function Counter(){
  const [count, setCount] = useState(0);


  useEffect(() =>{
    setInterval(()=>{
      setCount(c =>c+1)
    },3000)
  },[])


  return <div>
    <CurrentCount/>
    <Increase/>
    <Decrease/>
  </div>
}

// defining memo 1st way define

// const MemoizedCurrentCount  = memo(CurrentCount)

// second way 


const CurrentCount = memo (function(){
  return <div>
    1
  </div>
})


const Decrease = memo (function (){
  function decrease(){

  }

  return <div>
    <button onClick={decrease}>Decrease</button>
  </div>
})


const Increase = memo(function(){
  function increase(){

  }

  return <div>
    <button onClick={increase}>Increase</button>
  </div>
})

export default App