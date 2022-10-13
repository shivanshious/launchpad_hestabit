import React, { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {
  constructor(props) {
    super(props);
    this.childElement = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.childElement.current.handler();
  }

  render() {
    return (
      <>
        <Child ref={this.childElement} />
        <button onClick={this.handleClick}>Click me</button>
      </>
    );
  }
}
