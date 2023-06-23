import React, { useState, useCallback } from "react";
import ChildComponent from "./Child";

function App() {
  const [count, setCount] = useState(0);

  const getNumber = useCallback(() => {
    return 10;
  }, []);

  return (
    <div className="App">
      <h3>Hello This is Parent Component!</h3>
      <p>ParentCount: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click Me!</button>
      <br />
      <ChildComponent getNumber={getNumber} />
    </div>
  );
}

export default App;
