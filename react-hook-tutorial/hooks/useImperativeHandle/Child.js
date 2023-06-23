import React, { forwardRef, useImperativeHandle } from "react";

const ChildComponent = (props, ref) => {
  const domeSomeThing = () => {
    console.log("do smething");
  };

  useImperativeHandle(
    ref,
    () => ({
      domeSomeThing: () => domeSomeThing(),
    }),
    []
  );
  return <h1>Child</h1>;
};

export default forwardRef(ChildComponent);
