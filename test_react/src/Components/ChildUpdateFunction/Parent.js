import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [parentName, setParentName] = useState("Child");

  const handleClick = () => {
    setParentName("updated by parent");
  };
  return (
    <>
      <Child parent_name={parentName} />
      <button onClick={handleClick}>Click me</button>
    </>
  );
};

export default Parent;
