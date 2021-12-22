import React from "react";
import GameControl from "./GameControl";
import Header from "./Header";
import NavBar from "./NavBar";
import GamePhoto from "./img/games.JPG";
// import './App.css';

function App() {
  const NavStyle = {
    width: "1500px",
    height: "800px",
  };

  return (
    <React.Fragment>
    <div>
      <Header />
    </div>
    <div>
      <NavBar />
    </div>
    <div>
      <img style={NavStyle} src={GamePhoto}/>
      <GameControl />
    </div>
    </React.Fragment>
  );
}

export default App;
