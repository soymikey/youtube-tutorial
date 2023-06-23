import React, { useContext } from "react";
import { UserContext } from ".";

const ChildComponent = () => {
  const context = useContext(UserContext);

  return <h1>{context.hello}</h1>;
};

export default ChildComponent;
