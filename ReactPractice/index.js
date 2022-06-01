// const e1 = React.createElement('h1',{id:root},'REACT JS');
// ReactDOM.render(e1,document.getElementById('root'))

const e1 = React.createElement('ul',null,React.createElement('li',null,'car'),
                                        React.createElement('li',null,'bike'));
ReactDOM.render(e1,document.getElementById('root'))