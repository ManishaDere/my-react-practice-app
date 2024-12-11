import React from 'react';
import useCounter from "./customHooks/useCounter";

const Counter = () => {
    const { count, increament, decrement } = useCounter(0);
  return (
    <div>
      <h1> Count is: {count}</h1>
      <button id="increament" onClick={increament}>Increament</button>
      <button id="decrement" onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter
