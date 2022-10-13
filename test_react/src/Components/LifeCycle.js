import React from "react";

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red", show: true };
  }
  //   static getDerivedStateFromProps(props, state) {
  //     return {favoritecolor: props.favcol };
  //   }
  delHeader = () => {
    this.setState({ show: false });
  };
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentDidMount() {
    this.setState({ favoritecolor: "green" });

    console.log("componentDidMount");
  }
  render() {
    let myheader;
    if (this.state.show) {
      myheader = <Child />;
    }
    return (
      <>
        {myheader}
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <div id="div1"></div>
        <div id="div2"></div>

        <button type="button" onClick={this.delHeader}>
          Delete Header
        </button>
      </>
    );
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
      "Before the update, the favorite was " + prevState.favoritecolor;
    console.log("getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
      "The updated favorite is " + this.state.favoritecolor;
    console.log("componentDidUpdate");
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    console.log("componentWillUnmount");
    alert("The component named Header is about to be unmounted.");
  }
  render() {
    return <h1>Hello World!</h1>;
  }
}

export default LifeCycle;
