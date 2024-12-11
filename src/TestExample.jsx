import React, { useState, useEffect } from 'react'

const TestExample = () => {
    const [count, setCount] = useState(100);
 
    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     setCount((prevCount) => prevCount - 1);
    //   }, 1000);
   
    //   return () => clearInterval(interval);
    // }, []);
    return (<div>
                <p>Count: {count}</p>
                {count === 0 && "Timer elapsed"}
            </div>
    );
}

export default TestExample
