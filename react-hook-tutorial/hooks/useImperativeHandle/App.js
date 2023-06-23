import React, { useRef } from "react";
import ChildComponent from "./Child";

function App() {
  const inputRef = useRef(null);

  const onClick = () => {
    inputRef.current.domeSomeThing();
  };
  return (
    <div className="App">
      <button onClick={onClick}>click me</button>
      <ChildComponent ref={inputRef} />
    </div>
  );
}

export default App;
