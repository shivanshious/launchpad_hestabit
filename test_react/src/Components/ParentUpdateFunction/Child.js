import React from "react";

const Child = (props) => {
  return (
    <>
      <button onClick={props.handler}>Click me</button>
    </>
  );
};

export default Child;
