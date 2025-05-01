
import React, { useState } from 'react';

// Custom hook - ALWAYS START "use" and contain other hook and return it 
function useCounter() {
  const [counter, setCounter] = useState(0);   // other hook

  function increaseCount() {
    setCounter(counter + 1);
  }

  return { counter, increaseCount };   // return
}

const App = () => {
  const { counter, increaseCount } = useCounter();

  return (
    <div>
      <button onClick={increaseCount}>Increase {counter}</button>
    </div>
  );
};

export default App;
