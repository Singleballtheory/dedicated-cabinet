import React from "react";
import GameControl from "./GameControl";
import Header from "./Header";
import NavBar from "./NavBar";
// import './App.css';

function App() {
  return (
    <React.Fragment>
    <div>
      <Header />
    </div>
    <div>
      <NavBar />
    </div>
    <div>
      <GameControl />
    </div>
    </React.Fragment>
  );
}

export default App;
