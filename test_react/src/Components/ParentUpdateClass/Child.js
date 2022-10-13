import React, { Component } from "react";

export default class Child extends Component {
  render() {
    return (
      <>
        <button onClick={this.props.handler}>Click me</button>
      </>
    );
  }
}
