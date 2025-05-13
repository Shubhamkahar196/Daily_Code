import React from "react";
import { useRecoilValue, useSetRecoilState, RecoilRoot } from "recoil";
import { counterAtom, evenSelector } from "./Store/selector/counter";

// selector
// In Recoil, a selector is a function that:

// 1. Derives new data from atoms (state pieces).
// 2. Can be used to compute and return new values based on atoms.
// 3. Automatically updates when the underlying atoms change.

// Selectors help you:

// - Transform data
// - Combine data from multiple atoms
// - Optimize performance by only recalculating when necessary

// Think of selectors as a way to create new, derived state that's based on existing atoms!

function App() {
  return <>
   <RecoilRoot>
    <Button />
    <Counter />
    <IsEven />
  </RecoilRoot>
  </>
 
}

function Button() {
  // using counter atom
  const setCount = useSetRecoilState(counterAtom);
  function increase() {
    setCount((c) => c + 2);
  }

  function decrease() {
    setCount((c) => c - 1);
  }

  return (
    <div>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>decrease</button>
    </div>
  );
}

function Counter() {
  const count = useRecoilValue(counterAtom);

  return <div>{count}</div>;
}

function IsEven() {
  //using selector
  const even = useRecoilValue(evenSelector);
  return <div>{even ? "Even" : " Odd"}</div>;
}


export default App;
