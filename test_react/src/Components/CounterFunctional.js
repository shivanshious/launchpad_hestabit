import React, { useState } from "react";

const CounterFunctional = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <>
      <h1 className="heading">Counter</h1>
      <div className="main">
        <div className="content">
          <button className="button" onClick={handleDecrement}>
            -
          </button>
          <h2>{count}</h2>
          <button className="button" onClick={handleIncrement}>
            +
          </button>
        </div>
        <button className="button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </>
  );
};

export default CounterFunctional;
