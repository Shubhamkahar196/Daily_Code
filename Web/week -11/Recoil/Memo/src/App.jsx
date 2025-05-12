import React,{useState,useEffect,memo} from 'react'

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