import React from "react";
import GameDetail from "./GameDetail";
import NavBar from "./NavBar";

const gameList = [
  {
    name: "test",
    manufacturer: "test",
    releaseDate: "test",
    monitor: "test",
    players: "test",
    controls: "test",
    cabinet: "test"
  }
];

class GameControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      gameList: gameList,
    };
  }

  render() {
    let currentlyVisibleState = null;
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <NavBar />
      </React.Fragment>
    );
  }
}

export default GameControl;