import React, { Component } from "react";
import ChildComp from './ChildComp'

class UnmountingPhase extends Component {
constructor(props) {
super(props);
this.state = ({show: true});
}
deleteChild = () =>
{
this.setState({show: false});
};
render() {
return
(
<div>
{this.state.show ? <ChildComp /> : null}
<button onClick
={()=>{this.deleteChild()}
}
>delete</button>
</div>
);
}
}
export default UnmountingPhase