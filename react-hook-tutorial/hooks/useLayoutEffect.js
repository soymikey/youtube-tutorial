import React, { useLayoutEffect, useRef, useState } from "react";

function App() {
  const ref = useRef(null);
  const [style, setStyle] = useState({
    position: "absolute",
    top: "200px",
    background: "blue",
  });
  useLayoutEffect(() => {
    for (let i = 0; i < 1000; i++) {
      console.log(i);
    }
    if (ref.current) {
      const { width, height, top, left } = ref.current.getBoundingClientRect();
      setStyle({
        width: width + "px",
        height: height + "px",
        top: top + "px",
        left: left + "px",
      });
    }
  }, []);
  return (
    <div>
      <div
        ref={ref}
        style={{ width: "200px", height: "200px", margin: "30px" }}
      >
        Hello
      </div>
      <div style={{ ...style, position: "absolute" }}> This is Michael.</div>
    </div>
  );
}

export default App;
