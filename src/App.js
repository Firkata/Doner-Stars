import React from "react";
import logo from "./logo.svg";
import Facebook from "./components/Facebook";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome to Doner Stars</h2>
        <p>Join the Ranking of the best Doners in Sofia</p>
        <Facebook />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
      </header>
    </div>
  );
}

export default App;
