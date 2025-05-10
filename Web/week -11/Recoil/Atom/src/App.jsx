import React from 'react'
import { RecoilRoot , atom, useRecoilValue, useSetRecoilState} from 'recoil';
import { counterAtom } from './Store/atoms/counter';

//  Atom: A small piece of state that can
//  be shared and updated across your React app.

// Think of it like a single Lego brick that can be used to build bigger things!

const App = () => {
  return (
    <RecoilRoot>
      <Counter/>
    </RecoilRoot>
  )
}

function Counter(){


return <div>
  <CurrentCount />
  <Increase  />
  <Decrease  />
</div>
}

function CurrentCount(){
  const count = useRecoilValue(counterAtom);  // this is for value
  return <div>
    {count}
  </div>
}

function Decrease(){
   
  const setCount = useSetRecoilState(counterAtom);  // this for setter
  function decrease(){ 
    setCount( c => c-1);
  }

  return <div>
    <button onClick={decrease}>Decrease</button>
  </div>
}

function Increase(){
  const setCount = useSetRecoilState(counterAtom); 
  function increase(){
    setCount( c=> c+1);
  }

   return <div>
    <button onClick={increase}>Increase</button>
  </div>
}
export default App