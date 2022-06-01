// const e1 = <h1 id = 'root'>Express JS</h1>
// ReactDOM.render(e1,document.getElementById('root'))

const element = <h1>Hello, world</h1>;
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(element);