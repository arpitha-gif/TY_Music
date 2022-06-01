class Parent extends React.Component{
    state = {
        txt: ""
    }
    render(){
        return <div>
            <h1>{this.state.txt}</h1>
            <Child action = {this.getDataFromChild.bind(this)}/>
        </div>
    }
    getDataFromChild(childData){
        console.log(childData);
        this.setState({
            txt:childData
        })
    }
}


function Child(props){
    const str = "Pretty"
    return <div>
        <button onClick = {()=>{props.action(str)}}>Send data to parent</button>
    </div>
}

ReactDOM.render(<Parent/>,document.getElementById('root'))