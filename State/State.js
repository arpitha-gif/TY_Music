class Header extends React.Component{
    state = {
        name : "deepu"
    }
    render(){
        return <h1>{this.state.name}</h1>
    }
}

ReactDOM.render(<Header/>,document.getElementById('root'))