import React, { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "parent" };
    this.handler = this.handler.bind(this);
  }
  handler() {
    this.setState({ name: "updated by child" });
  }
  render() {
    return (
      <>
        <h1>{this.state.name}</h1>
        <Child handler={this.handler} />
      </>
    );
  }
}
