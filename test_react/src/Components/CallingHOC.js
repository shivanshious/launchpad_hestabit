import React from "react";
import HigherOrderComponent from "./HigherOrderComponent";

class CallingHOC extends React.Component {
  render() {
    return (
      <div>
        <h1>HOC example</h1>
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}
const HOC = HigherOrderComponent(CallingHOC);

export default HOC;
