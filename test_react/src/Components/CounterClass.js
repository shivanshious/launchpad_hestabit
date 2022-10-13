import React, { Component } from "react";

export default class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleIncrement() {
    this.setState({ count: this.state.count + 1 });
  }
  handleDecrement() {
    this.setState({ count: this.state.count - 1 });
  }
  handleReset() {
    this.setState({ count: 0 });
  }
  render() {
    return (
      <>
        <h1 className="heading">Counter</h1>
        <div className="main">
          <div className="content">
            <button className="button" onClick={this.handleDecrement}>
              -
            </button>
            <h2>{this.state.count}</h2>
            <button className="button" onClick={this.handleIncrement}>
              +
            </button>
          </div>
          <button className="button" onClick={this.handleReset}>
            Reset
          </button>
        </div>
      </>
    );
  }
}
