//destructuring props
function Header({name,place}){
    return <h1>Header Content {name} {place}</h1>
}

function Content(data){
    return <p>{data.fName}</p>
}

function Footer({person}){
    return <h2>{person.fName} {person.lName}</h2>
}

ReactDOM.render(<div>
    <Header name = "Arpitha" place = "Mysore"/>
    <Content fName = "Arpitha"/>
    <Footer person = {{fName:"Arpitha",lName:"Sandeep"}}/>
</div>,document.getElementById('root'))