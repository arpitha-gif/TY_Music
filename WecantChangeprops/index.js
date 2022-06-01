//We can't change props in class component
class Header extends React.Component{
    render(){
        console.log(this.props.name);
        //this.props.name = "sandeep"  -- error
        return <h1>{this.props.name}</h1>
    }
}

ReactDOM.render(<Header name = "arpitha"/>,document.getElementById('root'))
