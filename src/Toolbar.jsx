import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const Toolbar = () => {
    const theme = useContext(ThemeContext);
    return (
        <div>
        this theme is: {theme}
        </div>
    )
}

export default Toolbar
