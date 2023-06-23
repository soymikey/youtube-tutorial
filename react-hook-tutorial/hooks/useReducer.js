import React, { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { count: state.count + action.payload };
    case "subtract":
      return { count: state.count - action.payload };
    default:
      throw new Error("Illegal operation in reducer.");
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <p>Counter: {state.count}</p>
      <p>
        <button onClick={() => dispatch({ type: "add", payload: 1 })}>
          add 1!
        </button>
      </p>
      <p>
        <button onClick={() => dispatch({ type: "subtract", payload: 1 })}>
          subtract 1!
        </button>
      </p>
    </div>
  );
}

export default App;
