class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: "Mounting phase",
    };
    console.log("Constructor executed");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps Executed");
    console.log(state);
    
  }

  render() {
    console.log("Render method executed");
    return <div>{this.state.txt}</div>;
  }

  componentDidMount() {
    console.log("ComponentDidMount method executed");
  }
}

ReactDOM.render(<Parent />, document.getElementById("root"));
