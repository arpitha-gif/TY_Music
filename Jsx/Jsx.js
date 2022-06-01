const mobiles = ["oneplus", "iphone", "samsung", "realme"];

const items = 
  <ul>
    {mobiles.map((mobile, index) => {
      return <li key={index}>{mobile}</li>;
    })}
  </ul>
console.log(items);

ReactDOM.render(items, document.getElementById("root"));
