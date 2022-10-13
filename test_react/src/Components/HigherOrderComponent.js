import React from "react";

export default function HigherOrderComponent(WrappedComponent) {
  return class extends React.Component {
    render() {
      return (
        <>
          <WrappedComponent name="testing" />
          <h1>hiii</h1>
        </>
      );
    }
  };
}
