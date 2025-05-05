import React from 'react'

const App = () => {

  function useDebounce(){
    const currentClock = useRef();
    
    const fn
  }

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