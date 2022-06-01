function Header(props){
    return <h1>Header Content {props.name} {props.place}</h1>
}

function Content(data){
    return <p>{data.fName}</p>
}

function Footer(props){
    return <h2>{props.lName}</h2>
}

ReactDOM.render(<div>
    <Header name = "Arpitha" place = "Mysore"/>
    <Content fName = "Arpitha"/>
    <Footer lName = "gowda"/>
</div>,document.getElementById('root'))