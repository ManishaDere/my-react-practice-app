import React from 'react';
import { useWindowSize } from './customHooks/useWindowSize';

const WindowSizeUtilization = () => {
  const windowSize = useWindowSize();
  return (
    <div>
        <h1>WindowSizeUtilization</h1>
        <div>windowSize Height: {windowSize.height}</div>
        <div>windowSize Width: {windowSize.width}</div>
    </div>
  );
}

export default WindowSizeUtilization;