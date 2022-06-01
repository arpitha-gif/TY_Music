class MyApp extends React.Component{
    state = {
        userName : "Allen",
        adminName : "Smith",
        isAdmin : false
    }
    render(){
        const{userName,adminName,isAdmin}=this.state
        let renderData = null;
        if(isAdmin){
            renderData = <div>
                <h1>adminName</h1>
                <div>login</div>
                <div>home</div>
            </div>
        }else{
            renderData = <div>
                <h1>userName</h1>
                <div>home</div>
            </div>
        }
        return <div>
            {renderData}
            <button onClick = {()=>{this.changeUserAdminView()}}>{isAdmin?'Click here to see user view':'click here to see admin view'}</button>
        </div>
        }
        changeUserAdminView(){
            this.setState({
                isAdmin:!this.state.isAdmin
            })
    }
}

ReactDOM.render(<MyApp/>,document.getElementById('root'))