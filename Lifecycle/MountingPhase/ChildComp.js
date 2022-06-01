import React, { Component } from "react";
import UnmountingPhase from "./UnmountingPhase";

class ChildComp extends Component {
  render() {
    return <h1>Child Component</h1>;
  }
  componentWillUnmount() {
    alert("Component will unmount");
  }
}
export default ChildCom;
