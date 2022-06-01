const mobiles = ['iphone','samsung','nokia','redme'];

const e1 = React.createElement('ul',null,mobiles.map((mobiles,index)=>{
    return React.createElement('li',{key:mobiles},mobiles)
}))

ReactDOM.render(e1,document.getElementById("root"))