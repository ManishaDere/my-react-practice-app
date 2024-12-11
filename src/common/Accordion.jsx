import React, { useState } from 'react'

const Accordion = ({ title, description }) => {
    const [isActive, setIsActive] = useState(false);
    const handleToggleClick = () => {
        setIsActive(!isActive);
    }
  return (
    <div>
        <button onClick={handleToggleClick}>{title}{isActive ? "-" : "+"}</button>
        {isActive && <div className="accordion-content">{description}</div>}
    </div>
  )
}

export default Accordion;
