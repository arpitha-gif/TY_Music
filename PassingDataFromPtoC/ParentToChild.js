function App(props) {
  return (
    <div>
      <h1>{props.loggedInUser}</h1>
      <Home appName="Netflix" uName={props.loggedInUser} />
    </div>
  );
}

function Home(props) {
  return (
    <div>
      <h1>{props.appName}</h1>
      <h2>{props.uName}</h2>
    </div>
  );
}

ReactDOM.render(
  <App loggedInUser="Arpitha" />,
  document.getElementById("root")
);
