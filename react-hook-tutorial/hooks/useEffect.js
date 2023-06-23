import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  const onClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("useEffect");
  }, [count]);

  return (
    <div className="App">
      <button onClick={onClick}>Click</button>
      <p>{count}</p>
    </div>
  );
}

export default App;
