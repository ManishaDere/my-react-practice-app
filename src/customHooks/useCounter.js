import React, { useState } from 'react'

const useCounter = (initialCount) => {
    const [count, setCount] = useState(initialCount);
    const increament = () => {
        setCount(count+1);
    }
    const decrement = () => {
        setCount(count-1);
    }
  return {
    count,
    increament,
    decrement
  }
}

export default useCounter