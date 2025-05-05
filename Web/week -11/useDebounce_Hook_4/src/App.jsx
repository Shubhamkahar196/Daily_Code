import React ,{useRef} from 'react'


// useDeounee= > The useDebounce hook in React is a useful tool for delaying the execution of a function or API call 
// until a certain amount of time has passed since the last input or event.
//  This can help improve performance
function useDebounce(originalFn){
  const currentClock = useRef();
  
  const fn   = () =>{
    clearTimeout(currentClock.current);
    currentClock.current=setTimeout(originalFn, 200);
  }

  return fn;
}

const App = () => {


  function sendDataToBackend(){
    fetch("api.amazon.com/search/");
  }

  const debounceFn = useDebounce(sendDataToBackend)

  return (
    <div>
      <input type="text"  onChange={debounceFn}/>
    </div>
  )
}

export default App