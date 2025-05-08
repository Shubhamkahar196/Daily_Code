import React from 'react'
import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from 'recoil';
import { counterAtom } from './Store/atoms/counter';

 // atom 
    //  an "atom" is a small, reusable building block of UI, 
// like an icon or input field, used to create more complex components and consistent design systems

const Atomms = () => {
  return (
    <RecoilRoot>
        <Counter/>
    </RecoilRoot>
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

export default Atomms