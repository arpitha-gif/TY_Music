class Header extends React.Component {
  state = {
    fName: "Sandeep",
  };
  
  changeState(){
       console.log("Before changing the state",this.state.fName);
       //asynchronous
       this.setState({
           fName : "deepu"
       })
       console.log("After changing the state",this.state.fName);
  }

  render() {
    return <div>
        <h1>{this.state.fName}</h1>
        <button onClick = {()=>{this.changeState()}}>Click Here</button>
    </div>;
  }
}

ReactDOM.render(<Header />, document.getElementById("root"));
