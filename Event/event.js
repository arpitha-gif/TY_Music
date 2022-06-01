class Header extends React.Component {
  getData = () => {
    console.log("getData executed");
    console.log(this);
  };
  render() {
    return (
      <div>
        <h1>{this.props.fName}</h1>
        <button onClick={this.getData}>Click</button>
      </div>
    );
  }
}

ReactDOM.render(<Header fName="Arpitha" />, document.getElementById("root"));
