import React, { useEffect, useState } from "react";

const Child = (props) => {
  const [name, setName] = useState("");

  useEffect(() => {
    setName(props.parent_name);
  }, [props.parent_name]);

  return (
    <>
      <h1>{name}</h1>
    </>
  );
};
export default Child;
