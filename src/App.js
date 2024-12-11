import AccordionExample from './AccordionExample';
import SearchBarExample from './SearchBarExample';
import { ThemeContext } from "./ThemeContext";
import Toolbar from "./Toolbar";
import TestExample from "./TestExample";
import Timer from "./Timer";
import Counter from "./Counter";
import './App.css';
import LazyLoading from './LazyLoading';
import DefferedDemo from "./DeferredDemo";
import { Profiler } from 'react';
import CounterExample from "./CounterExample";
import WindowSizeUtilization from "./WindowSizeUtilization"

function App() {
  function onRender(id, phase, actualDuration, baseDuration, startTime, commitTime) {
    // Aggregate or log render timings...
    console.log({
      id, phase, actualDuration, baseDuration, startTime, commitTime
    })
  }
  return (
    <div>
      <AccordionExample />
      <SearchBarExample />
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
      <TestExample />
      <Timer />
      <Counter />
      <LazyLoading />
      <Profiler onRender={onRender}>
        <DefferedDemo />
      </Profiler>
      {/* <CounterExample /> */}
      <WindowSizeUtilization />
    </div>
  );
}

export default App;
