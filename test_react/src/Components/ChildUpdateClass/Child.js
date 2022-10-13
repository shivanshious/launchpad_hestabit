import React, { Component } from "react";

export default class Child extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "child" };
    this.handler = this.handler.bind(this);
  }
  handler() {
    this.setState({ name: "updated by parent" });
  }
  render() {
    return (
      <>
        <h1>{this.state.name}</h1>
      </>
    );
  }
}
