import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [name, setName] = useState("Parent");
  const handler = () => {
    setName("updated by child");
  };
  return (
    <>
      <h1>{name}</h1>
      <Child handler={handler} />
    </>
  );
};

export default Parent;
