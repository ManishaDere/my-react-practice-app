import React, { useState } from 'react'

const CounterExample = () => {
    const [count, setCount] = useState(0)
 
      const increment = () => {
        setCount(count + 1)
      }
    
      return (
            <div>
                <button onClick={increment}>Increment</button>
                <p>Count: {count}</p>
            </div>
    
      )
}

export default CounterExample