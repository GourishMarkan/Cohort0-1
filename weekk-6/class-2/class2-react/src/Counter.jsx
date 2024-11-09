// import React from 'react'
import { useState, useMemo, useEffect } from "react";
function Counter() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  const [count, setCount] = useState(0);
  // let count = useMemo(() => {
  //   let finalCount = 0;
  //   for (let i = 0; i <= inputValue; i++) {
  //     // count = count + i;
  //     finalCount += i;
  //   }
  //   return finalCount;
  // }, [inputValue]);
  useEffect(() => {
    let finalCount = 0;
    for (let i = 0; i <= inputValue; i++) {
      finalCount += i;
    }
    setCount(finalCount);
  }, [inputValue]);
  return (
    <div>
      <input
        placeholder="find sum from 1 to n"
        type="text"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <p>
        sum from 1 to {inputValue} is
        {count}
      </p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter({counter})
      </button>
    </div>
  );
}

export default Counter;
