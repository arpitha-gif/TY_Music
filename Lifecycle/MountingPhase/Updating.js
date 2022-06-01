class Parent extends React.Component {
    constructor(props) {
    super(props);
    console.log("1. constructor initializing the state");
    this.state = {
    name: "miller",
    };
    }
    shouldComponentUpdate() {
    console.log("3. Component should update");
    return true; //miller will change John
    } //if return false Azam will not change
    updateState = () => {
    console.log("at updating phase");
    this.setState({
    name: "john",
    });
    };
    render() {
      console.log("2. render the state");
      return (
      <div>
      <h1>Hello Mr. {this.state.name}</h1>
      <button onClick={this.updateState}>Change</button>
      </div>
      );
      }
      getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log("4. get snapshot before update " + prevState.name);
      return prevState.name;
      }
      componentDidUpdate(prevProps, prevState, snapshot) {
      console.log("5. ComponentDidUpate() with prevState: " + snapshot);
      }
      }
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       txt: "Mounting phase",
  //     };
  //     console.log("Constructor executed");
  //   }
  
  //   static getDerivedStateFromProps(props, state) {
  //     console.log("getDerivedStateFromProps Executed");
  //     console.log(state);
      
  //   }
  
  //   render() {
  //     console.log("Render method executed");
  //     return <div>{this.state.txt}</div>;
  //     <button onClick = {()=>{this.UpdateText('Updating text')}}>click</button>
  //   }

  //   UpdateText(data){
  //      this.setState({
  //          txt:data
  //      })
  //   }

  //   shouldComponentUpdate(){
  //       console.log('shouldComponent method executed');
  //       return true
  //   }
 
  //   getSnapshotBeforeUpdate(prevProps, prevState) {
  //     console.log(" get snapshot before update " + prevState.name);
  //     return prevState.name;
  //     }
      

  //   componentDidUpdate(prevProps,prevState){
  //       console.log("ComponentDFidUpdate method executed");
  //   }
  
  // }
  
  ReactDOM.render(<Parent />, document.getElementById("root"));
  