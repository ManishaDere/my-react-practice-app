import React, { useEffect, useState, useRef } from 'react'

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        if(isActive) {
            ref.current = setInterval(() => {
                setSeconds(seconds + 1);
            }, 1000);
        } else if(!isActive && seconds !== 0) {
            clearInterval(ref.current);
            setSeconds(0);
        }
        return () => {
            clearInterval(ref.current);
        }
    }, [isActive, seconds]);

    function toggleTimer() {
        setIsActive(!isActive);
    }

    function onResetTimer() {
        setSeconds(0);
    }

    return (
        <div>
            <h1>Timer Implementation</h1>
            <div>Elapsed time: {seconds}seconds</div>
            <div style={{ display: "flex"}}>
                <button id="start" style={{ marginRight: "4px"}} onClick={toggleTimer}>Start</button>
                {isActive && <button id="pause" style={{ marginRight: "4px"}} onClick={toggleTimer}>Pause</button>}
                <button id="Reset" onClick={onResetTimer}>Reset </button>
            </div>
        </div>
    );
}

export default Timer
