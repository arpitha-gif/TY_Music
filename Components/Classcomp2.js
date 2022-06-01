class Header extends React.Component{
    render(){
        console.log(this.props.name);
        return (<div>
        <h1>Header Content</h1>
        <h2>hi</h2>
        </div>
        )
    }
}

class Content extends React.Component{
    render(){
        return <p>Content Details {this.props.fName} {this.props.lName}</p>
    }
}

class Footer extends React.Component{
    render(){
        return <h1>Footer Content</h1>
    }
}

ReactDOM.render(<div>
                <Header name = "arpitha"/>
                <Content fName = "sandeep" lName = "deepu"/>
                <Footer/>
                </div>,document.getElementById('root'))