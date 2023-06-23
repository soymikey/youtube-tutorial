import React, { useEffect } from "react";

const ChildComponent = ({ getNumber }) => {
  useEffect(() => {
    alert("child re-render");
  }, [getNumber]);

  return (
    <>
      <h1>Hello This is Child Component</h1>
      <p>{getNumber && getNumber()}</p>
    </>
  );
};

export default ChildComponent;
