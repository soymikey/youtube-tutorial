import React, { useState, useMemo } from "react";

const data = [
  { name: "Math", id: 0 },
  { name: "Chinese", id: 1 },
  { name: "English", id: 2 },
  { name: "Biology", id: 3 },
  { name: "Physis", id: 4 },
];

function App() {
  const [count, setCount] = useState(0);

  const renderSubject = useMemo(() => {
    return (() => {
      console.log("Recalculate renderSubject !");
      return data.map((i) => <li key={i.id}>{i.name}</li>);
    })();
  }, [count]);

  return (
    <div className="App">
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click Me !</button>
      <br />
      <h1>Subject:</h1>
      <ul>{renderSubject}</ul>
    </div>
  );
}

export default App;
