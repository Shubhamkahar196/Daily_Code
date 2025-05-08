import React  from 'react'
import ContextApi from './ContextApi';


const App = () => {
  return (

    <div>
      
      {/*  this is contextAPi */}
      <ContextApi/>
      
    </div>


   
   
   
  )
}


function Counter(){
    
    return <div>
        <CurrentCount/>
        <Increase />
        <Decrease />
    </div>
}

function CurrentCount(){
   const count = useRecoilValue(counterAtom)
    return <div>
        {count}
    </div>
}

function Increase(){
    const setCount = useSetRecoilState(counterAtom);
    function increase(){
        setCount(c => c+1);
    }
  
    return <div>
        <button onClick={increase}>increase</button>
    </div>
}

function Decrease(){
    const setCount = useSetRecoilState(counterAtom);

    function decrease(){
        setCount(c => c-1);
    }
   
    return <div>
        <button onClick={decrease}>Decrease</button>
    </div>
}

export default App