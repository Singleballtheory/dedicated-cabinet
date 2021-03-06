import React from "react";
import GameList from "./GameList";
import Game from "./Game";
import GameDetail from "./GameDetail";
import NavBar from "./NavBar";

const mainGameList = [
  {
    name:  "NBA Jam Tournament Edition",
    manufacturer:  "Midway Games",
    releaseDate:  "1993/1994",
    monitor:  "Horizontal",
    players: "4 (Single player, Two-player co-op, One-vs-One, Two-vs-Two)",
    controls: "Joystick: 8-way Buttons: 3 (Shoot Pass Turbo)",
    cabinet: "Upright/Standard",
  },
  {
  name: "Tournament Cyberball 2072",
  manufacturer:  "Atari Games",
  releaseDate:  "1989",
  monitor:  "Horizontal",
  players: "4 (Single player, Two-player co-op, One-vs-One, Two-vs-Two)",
  controls: "Joystick: 8-way Buttons: 1 (Pass/Lateral/Turbo Boost)",
  cabinet: "Upright/Standard, dual monitor",
  },
  {
  name: "Cheyenne",
  manufacturer:  "Exidy",
  releaseDate:  "1984",
  monitor:  "Horizontal",
  players: "1",
  controls: "Mounted Rifle: Optical Buttons: Trigger",
  cabinet: "Upright/Standard",
  },
  {
  name: "Pole Position",
  manufacturer:  "Atari",
  releaseDate:  "1982",
  monitor:  "Horizontal",
  players: "1",
  controls: "Steering: Wheel Shifter: 2-postion (low, high) Pedals: 1 (Accelerator)",
  cabinet: "Upright/Standard",
  },
  {
  name: "Arch Rivals",
  manufacturer:  "Bally Midway",
  releaseDate:  "1989",
  monitor:  "Horizontal",
  players: "2 (Single player, One-vs-One)",
  controls: "Joystick: 49-position optical Buttons: 2 (Pass/Punch Shoot/Block)",
  cabinet: "Upright/Standard",
  },
  {
  name: "Ring King",
  manufacturer:  "Nihon Bussan/AV Japan",
  releaseDate:  "1985",
  monitor:  "Vertical",
  players: "2 (Single player, One-vs-One)",
  controls: "Joystick: 8-way Buttons: 3 (Punch Jab Dodge)",
  cabinet: "Upright/Standard",
  }
];

class GameControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mainGameList: mainGameList,
    };
  }

  render() {
    let currentlyVisibleState = (
      <GameList
        gameList={this.state.mainGameList}
      />
    );
    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

export default GameControl;