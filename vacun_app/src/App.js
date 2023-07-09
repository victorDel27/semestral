import React from "react";
/*import logo from "./logo.svg";*/
import "./App.css";
import Persona from "./components/login";

function App() {
  /* const [data, setData] = React.useState(null);
  const [data1, setData1] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  React.useEffect(() => {
    fetch("/login")
      .then((res) => res.json())
      .then((data1) => setData1(data1.message));
  }, []); */


  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
        <p>{!data1 ? "Loading..." : data1}</p>} */}

        <Persona />
      </header>
    </div>
  );
}

export default App;